<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class Menu extends MX_Controller {
	protected $_maxLvl = 0;
	protected $_currentLvl = 1;
	protected $_hasChild = true;
	protected $_out = '';
	protected $_menuName = '';
	protected $_format = '';
	protected $data = array();
	protected $_exCounter = 1;
	protected $_seo = '';

	public function __construct() {
		parent::__construct();
		$this -> load -> model('menu_m');
	}

	protected function open_ul() {	
		if($this->_format == 'jqMobile' && $this->_exCounter == 1){
			$this -> _out .= '<ul class="jqm-list ui-alt-icon ui-nodisc-icon">';
		}else{
			$this -> _out .= '<ul>';
		}
	}
	protected function checkDomain($link){
		if(strpos($link, '.com') || strpos($link, '.gov') || strpos($link, '.in') || strpos($link, '.co') || strpos($link, '.net') || strpos($link, '.org') || strpos($link, '.info') || strpos($link, '.bz') || strpos($link, '.')){
			return true;
		}else{
			return false;
		}
	}
	protected function checkUrl($link){
		if(strpos($link, '//') || strpos($link, '//')){
			return true;
		}else{
			return false;
		}
	}
	protected function checkPdf($link){
		if(strpos($link, '.pdf')){
			return true;
		}else{
			return false;
		}
	}
	protected function reformLink($link){
		$linkMade = false;
		if($link == ''){
			$link = base_url();
			$linkMade = true;
		}else if($this->checkUrl($link) && $linkMade === false){
			$link = $link;
			$linkMade = true;
		}else if($this->checkPdf($link) && $linkMade === false){
			$link = base_url('_u/docs/'.$link);
			$this->_seo .= ' target="_blank"';
			$linkMade = true;
		}else if($this->checkDomain($link) && $linkMade === false){
			$link = 'http://www.'.$link;
			$linkMade = true;
		}else if($linkMade == false){
			$link = base_url().$link;
		}
		return $link;
	}
	protected function open_li($link, $label,$seo='',$design='',$form='0',$liattrib='') {
		$link = $this->reformLink($link);
		if($this->_format == 'jqMobile' && $form == 1){
			$liattrib .= ' data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-iconpos="right" data-inset="false"';
			$this -> _out .= '<li '.$liattrib.'><h3 '.$seo.' >' . $label . '</h3>';
		}else if($this->_format == 'jqFoot'){
			$design .= " ui-btn ui-btn-icon-left ui-icon-arrow-r";
			$this -> _out .= '<li '.$liattrib.'><a href="' . $link . '" title="' . $label . '" '.$this->_seo.' class="'.$design.'" ak >' . $label . '</a>';
		}else{
			$this -> _out .= '<li '.$liattrib.'><a href="' . $link . '" title="' . $label . '" '.$this->_seo.' class="'.$design.'" >' . $label . '</a>';
		}
	}

	protected function close_li($label = '') {		$this -> _out .= '</li><!-- li close -->';
	}

	protected function close_ul() {		$this -> _out .= '</ul><!-- ul close -->';
	}

	public function index() {
		// echo 'welcome';
		$this -> gm();
	}

	protected function check_max_lvl() {
		// echo 'incomming menu name to generate_menu func() is '.$menuName.'<br />';
		$this->load->model('crud/db_crud_m');
		$w = array(
			'parent_menu'	=> $this -> _menuName,
		);
		$out = $this->db_crud_m->max_from('item_level','menu_item',$w);
		return $out[0]['item_level'];
	}

	protected function child_count($pid = '0') {
		$this -> load -> model('menu_m');
		return $this -> menu_m -> get(true, $pid, $this -> _menuName);
	}

	protected function get_childred($pid = '0') {
		$this -> load -> model('menu_m');
		return $this -> menu_m -> get(false, $pid, $this -> _menuName);
	}

	protected function out_feeder($pid = '0') {
		$this -> open_ul();
		$rows = $this -> get_childred($pid);
		foreach($rows as $row) {
			$c = $this -> child_count($row -> menuitem_id);
			$this->_seo = $row->seo;
			if($c > 0) {
				$this->_exCounter = 2;
				$this -> open_li($row -> href, $row -> item_name, $row->seo , $row->design,1,$row->liattr);
				$this -> out_feeder($row -> menuitem_id);
			} else {
				$this->_exCounter = -1;
				$this -> open_li($row -> href, $row -> item_name, $row->seo, $row->design, 0,$row->liattr);
				$this -> close_li($row -> item_name);
			}
		}

		$this -> close_ul();
	}

	protected function generate_menu() {
		
		$this -> _maxLvl = $this -> check_max_lvl();
		// echo $this->_maxLvl;
		$c = $this -> child_count(0);
		if($c > 0) {
			$this -> out_feeder(0);
		}
	}

	protected function i($dt) {
		$this -> load -> model('menu_m');
		if($this -> menu_m -> insert_b($dt)) {
			echo 'success insertion';
		} else {
			echo 'failed in data insertion';
		}
	}

	public function init() {
		$dt = array( array('label' => 'label-1', 'link' => 'link-1', 'parent_menu' => 'menu1', 'param1' => '1', 'parent_id' => '0', 'lvl' => '1'), array('label' => 'label-1-1', 'link' => 'link-1-1', 'parent_menu' => 'menu1', 'param1' => '2', 'parent_id' => '1', 'lvl' => '2'), array('label' => 'label-1-2', 'link' => 'link-1-2', 'parent_menu' => 'menu1', 'param1' => '3', 'parent_id' => '1', 'lvl' => '2'), array('label' => 'label-1-2-1', 'link' => 'link-1-2-1', 'parent_menu' => 'menu1', 'param1' => '4', 'parent_id' => '3', 'lvl' => '3'), array('label' => 'label-1-2-2', 'link' => 'link-1-2-2', 'parent_menu' => 'menu1', 'param1' => '5', 'parent_id' => '3', 'lvl' => '3'), array('label' => 'label-1-3', 'link' => 'link-1-3', 'parent_menu' => 'menu1', 'param1' => '6', 'parent_id' => '1', 'lvl' => '2'), array('label' => 'label-2', 'link' => 'link-2', 'parent_menu' => 'menu1', 'param1' => '7', 'parent_id' => '0', 'lvl' => '1'), array('label' => 'label-2-1', 'link' => 'link-2-1', 'parent_menu' => 'menu1', 'param1' => '8', 'parent_id' => '7', 'lvl' => '2'), array('label' => 'label-2-2', 'link' => 'link-2-2', 'parent_menu' => 'menu1', 'param1' => '9', 'parent_id' => '7', 'lvl' => '2'), array('label' => 'label-2-3', 'link' => 'link-2-3', 'parent_menu' => 'menu1', 'param1' => '10', 'parent_id' => '7', 'lvl' => '2'), array('label' => 'label-3', 'link' => 'link-3', 'parent_menu' => 'menu1', 'param1' => '11', 'parent_id' => '0', 'lvl' => '1'), array('label' => 'label-3-1', 'link' => 'link-3-1', 'parent_menu' => 'menu1', 'param1' => '12', 'parent_id' => '11', 'lvl' => '2'), array('label' => 'label-3-2', 'link' => 'link-3-2', 'parent_menu' => 'menu1', 'param1' => '13', 'parent_id' => '11', 'lvl' => '2'), array('label' => 'label-3-2-1', 'link' => 'link-3-2-1', 'parent_menu' => 'menu1', 'param1' => '14', 'parent_id' => '13', 'lvl' => '3'), array('label' => 'label-3-2-2', 'link' => 'link-3-2-2', 'parent_menu' => 'menu1', 'param1' => '15', 'parent_id' => '13', 'lvl' => '3'), array('label' => 'label-3-2-3', 'link' => 'link-3-2-3', 'parent_menu' => 'menu1', 'param1' => '16', 'parent_id' => '13', 'lvl' => '3'), array('label' => 'label-3-2-4', 'link' => 'link-3-2-4', 'parent_menu' => 'menu1', 'param1' => '17', 'parent_id' => '13', 'lvl' => '3'));
		$this -> i($dt);
	}

	public function gm($menuName = 'menu1', $format = '') {
		$this -> _out = '';
		$this -> _format = $format;
		$this -> _menuName = $menuName;
		// echo 'incomming format request to menu_c/gm is ' . $format . '<br /> and menu name is '.$menuName;
		$this -> generate_menu();
		
		// echo $this -> _out;
		return $this -> _out;
		// $data['output'] = $this -> _out;
		// $this -> load -> view('menu', data);
	}

}
