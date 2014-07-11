<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class Cms extends MX_Controller {

	protected $_tbl = 'page';
	protected $_requestPage = '';

	public function __construct() {
		parent::__construct();
		// $this->load->helper('url');
		// $this->view->setEscape('stripslashes');
	}
	
	public function _remap($method)
	{
	  if (method_exists($this, $method))
	  {
	    $this->$method();
	  } else {
	    $this->page($method);
	  }
	}
	
	protected function feedContent($in) {
		$this -> load -> model('crud/crud_m');
		$in = $this -> crud_m -> no_slashes($in);
		$title = $in['title'];
		$subtitle = $in['subtitle'];
		$content = $in['content'];
		$seo = $in['seo'];
		$design = $in['design'];
		$img1 = $in['img1'];
		$img2 = $in['img2'];
		$img3 = $in['img3'];
		$vid1 = $in['vid1'];
		$vid2 = $in['vid2'];
		$liattr = $in['liattr'];	if($liattr == ''){$liattr = 'class="mainContent"';}
		$param2 = $in['param2'];

		$this -> load -> model('crud/crud_m');
		if($img3 == ''){
			$o = $this -> crud_m -> openDiv($liattr) . $this -> crud_m -> feedH($title, $seo) . $this -> crud_m -> feedP($subtitle) . $this -> crud_m -> feedImg($img3, $title) . $this -> crud_m -> feedP($content) . $this -> crud_m -> closeDiv($liattr);
		}else if($this->_requestPage == 'homepage' && $img3 !== ''){
			$bottomPad = 'style=" padding-bottom:90px;"';
			$o = $this -> crud_m -> openDiv($liattr) . $this -> crud_m -> feedH($title, $seo) . $this -> crud_m -> feedP($subtitle) . 
				$this -> crud_m -> openDiv($bottomPad) . $this -> crud_m -> feedImg($img3, $title) . $this -> crud_m -> feedP($content). $this -> crud_m -> closeDiv('') . $this -> crud_m -> closeDiv($liattr);
		}else{
			$o = $this -> crud_m -> openDiv($liattr) . $this -> crud_m -> feedH($title, $seo) . $this -> crud_m -> feedP($subtitle) . 
				$this -> crud_m -> openDiv('') . $this -> crud_m -> feedImg($img3, $title) . $this -> crud_m -> feedP($content). $this -> crud_m -> closeDiv('') . $this -> crud_m -> closeDiv($liattr);
		}
		return $o;
	}

	protected function prepareContent($page = 'homepage') {
		// fill out all attributes in page table or get all column names in page attribute
		$this -> load -> model('crud/db_crud_m');
		$w = array('slug' => $page);
		if(($row = $this -> db_crud_m -> getWhere($this -> _tbl, $w, true)) == false){
			$w = array('slug' => $this->db->escape($page));
			$row = $this -> db_crud_m -> getWhere($this -> _tbl, $w, true);
		}

		return $this -> feedContent($row);
	}

	protected function loadHeader($data, $headTemplate = 'layouts/head') {
		$this -> load -> view($headTemplate, $data);
		$this -> load -> view('layouts/mhead');
		$this -> load -> view('layouts/lside');
		$this -> load -> view('layouts/tmcontent');
		if($this->_requestPage == 'homepage'){
			$this -> load -> view('layouts/slide');
		}	
	}

	protected function loadFooter($data, $footTemplate = 'layouts/foot') {
		$this -> load -> view('layouts/bmcontent');
		$this -> load -> view('layouts/bfoot');
		$this -> load -> view('layouts/rside');
		$this -> load -> view('partials/search');
		$this -> load -> view('layouts/tfoot');
		$this -> load -> view('partials/textras');
		$this -> load -> view($footTemplate, $data);
	}

	protected function page($page = 'homepage') {
		$data['title'] = $this -> config -> item('site_name');
		$this->_requestPage = $page;
		// find page in db if not available pass to homepage
		$data['jsHead'] = array();
		$data['jsXH'] = array();
		$data['jsXF'] = array();
		$data['jsFoot'] = array();
		$data['cssHead'] = array();
		$data['cssXH'] = array();
		$data['cssXF'] = array();
		$data['cssFoot'] = array();

		$data['content'] = $this -> prepareContent($page);
		$theme = 'homepage';

		$this -> loadHeader($data);

		$this -> load -> view($theme, $data);

		$this -> loadFooter($data);
	}

	public function index() {
		$this -> page();
	}

	public function exAppHead($tit='',$jsH='',$cssH='',$jsX='',$cssX=''){
		$data['title'] = $tit;
		
		// find page in db if not available pass to homepage
		$data['jsHead'] = array();
		$data['jsXH'] = array();
		$data['cssHead'] = array();
		$data['cssXH'] = array();
		
		// $data['content'] = $this -> prepareContent($page);
		$theme = 'homepage';

		$this -> loadHeader($data);
		// echo 'ex app head';
	}
	public function exAppFoot($jsF=array(),$cssF=array(),$jsX=array(),$cssX=array()){
		// find page in db if not available pass to homepage
		$data['jsXF'] = $jsX;
		$data['jsFoot'] = $jsF;
		$data['cssXF'] = $cssX;
		$data['cssFoot'] = $cssF;

		// $data['content'] = $this -> prepareContent($page);
		$theme = 'homepage';

		$this -> loadFooter($data);
		// echo 'ex app Foot';
	}
}
