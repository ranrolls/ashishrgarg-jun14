<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class Extras extends MX_Controller {

	protected $_tbl = 'page';
	protected $_requestPage = '';

	public function __construct() {
		parent::__construct();
	}
	
	public function success(){
		$tit = $this -> config -> item('site_name').' | '.'Email successful!';
		echo modules::run('cms/exAppHead', $tit);
		$this->load->view('extras/success');
		
	}
	public function fail(){
		$tit = $this -> config -> item('site_name').' | '.'Email failure!';
		echo modules::run('cms/exAppHead', $tit);
		$this->load->view('extras/fail');
	}
}	