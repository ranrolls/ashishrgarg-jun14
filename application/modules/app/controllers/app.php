<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class App extends MX_Controller {
	protected $_tbl = 'page';
	protected $_appSlug = 'appslug';
	protected $_appName = 'App Name';
	
	public function __construct() {
		parent::__construct();
		$this->load->helper('form');
	}
	
	public function _remap($method)
	{
	  if (method_exists($this, $method))
	  {
	    $this->$method();
	  } else {
	    $this->loadApp($method);
	  }
	}

	protected function load($app) {
		// http://localhost/bL/online/ashishrgarg-jun14/app/loadApp/emi
		$tit = $this -> config -> item('site_name').' | '.$this->_appName;
		
		// $data['content'] = $this->getAppContent($app);
		$data['app'] = $this->_appSlug;
		echo modules::run('cms/exAppHead', $tit);
		
		$app = $this->_appSlug.'/'.$this->_appSlug;
		$this->load->view($app,$data);
	}
	
	protected function validateApp($app){
		$this->load->model('crud/db_crud_m');
		$w = array(
			'slug'	=>	'apps'
		);
		$r = $this->db_crud_m->getWhere($this->_tbl,$w,true,1);
		// print_r($r);
		$pieces = unserialize(urldecode($r['content']));
		// print_r($pieces);
		
		if ($key = array_search(strtolower($app),array_map('strtolower',$pieces))){
			if(strrpos($key,$this -> config -> item('seperator'))){
				$this->_appSlug = $pieces[$key];
				while(pos($pieces) !== $pieces[$key]){
					next($pieces);
				}
				$this->_appName = prev($pieces);
				redirect (base_url().'app/'.$this->_appName);
				// return false;
				// exit();
				return true;
			}else{
				$this->_appName = $pieces[$key];
				while(pos($pieces) !== $pieces[$key]){
					next($pieces);
				}
				$this->_appSlug = next($pieces);
				
				// echo 'app slug is '.$this->_appSlug.' and app name is '.$this->_appName;
				return true;				
			}
		}else{
			return false;
			// echo 'no';
		}
	}
	public function showAllApps(){
		echo 'listing all avaliable apps';
		
	}
	protected function loadApp($appName = '') {
		// $this->validateApp($appName);
		if($appName == '' || $this->validateApp($appName) == false) {
			$this->showAllApps();
		} else if($this->validateApp($appName)){
			$this -> load($this->_appName);
		}
	}

	public function index() {
		// list all available on this portal
		echo 'listing all avaliable apps';
		// echo phpinfo();
	}
	public function init($in = array()){
		if(sizeof($in) < 2){	
			$init = array(
				'alc'			=>		'AutoLoanCalculator',
				'alc'.$this -> config -> item('seperator')		=>		'alc',
				'cec'			=>		'CalculateEffectiveCapital',
				'cec'.$this -> config -> item('seperator')		=>		'cec',
				'cnp'			=>		'CalculateNetProfits',
				'cnp'.$this -> config -> item('seperator')		=>		'cnp',
				'cnw'			=>		'CalculateNetWorth', 
				'cnw'.$this -> config -> item('seperator')		=>		'cnw',
				'emi'			=>		'EasyMoneyInstallmentCalculator', 
				'emi'.$this -> config -> item('seperator')		=>		'emi',
				'hlc'			=>		'HomeLoanCalculator', 
				'hlc'.$this -> config -> item('seperator')		=>		'hlc',
				'hra'			=>		'HRACalculator', 
				'hra'.$this -> config -> item('seperator')		=>		'hra',
				'kvp'			=>		'KisanVikasPatras', 
				'kvp'.$this -> config -> item('seperator')		=>		'kvp',
				'noi'			=>		'NumberofInstallments', 
				'noi'.$this -> config -> item('seperator')		=>		'noi',
				'nsc'			=>		'NscCalculator', 
				'nsc'.$this -> config -> item('seperator')		=>		'nsc',
				'tax'			=>		'TaxCalculator', 
				'tax'.$this -> config -> item('seperator')		=>		'tax',
				'tds'			=>		'TdsCalculator', 
				'tds'.$this -> config -> item('seperator')		=>		'tds',
				'vat'			=>		'ValueAddedTaxCalculator',
				'vat'.$this -> config -> item('seperator')		=>		'vat',
			);
			
		}else{
			$init = $in;
		}
		
		$init = urlencode(serialize($init));
		$dt = array(
			'content'	=>		$init
		);
		// $arr = unserialize(urldecode($init));
		$this->load->model('crud/db_crud_m');
		$w = array(
			'slug'	=>	'apps'
		);
		// echo $init;
		$this->db_crud_m->update_s($this->_tbl,$dt,$w);
		echo 'apps db updated success';
	}
}
