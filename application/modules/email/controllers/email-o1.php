<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class Email extends MX_Controller {

	protected $_tbl = 'page';
	protected $_requestPage = '';
	protected $_postInArray = array();
	protected $_formType = 'contact';

	public function __construct() {
		parent::__construct();
		$this->load->library('form_validation');
		$this->load->helper('form');
	}
	
	public function _remap($method)
	{
	  if (method_exists($this, $method))
	  {
	    echo 'calling wrong method - 404 page';
	  } else {
	  		$this->load->library('form_validation');
			$this->load->helper('form');
			// echo 'remap is '.$method;
			$this->_formType = $method;
	  		$this->email();
	  }
	}
	
	protected function prepareView($type){
		$tit = $this -> config -> item('site_name').' | '.$this->_formType;
		echo modules::run('cms/exAppHead', $tit);
		$this->load->view($this->_formType,$data);
	}
	protected function prepareEMailAttribute(){
		$tempArray = array(
			'from'		=>			$this->config->item('emailSender-1'),
			'to'			=>			$this->config->item('emailSender-3'),
			'sub'			=>			'New User Contact at '.$this->config->item('site_name'),
			'msg'			=>			'
				<div>
					<h1>Hello '.$this->config->item('site_name').'</h1>
					<h3>My self '.$this->_postInArray['name'].'</h3>
					<i>Interested in your '.$this->_postInArray['interest'].' service</i>
					<p>'.$this->_postInArray['message'].'</p>
					<i>My Email '.$this->_postInArray['email'].' and phone is '.$this->_postInArray['phone'].'</i>
				</div>
				'
		);
		$this->_postInArray = array();
		$this->_postInArray = $tempArray;
	}
	protected function fetchPost(){
		
			$this->_postInArray = array(
				'name'		=>		$_POST['name'],
				'email'		=>		$_POST['email'],
				'phone'		=>		$_POST['phone'],
				'interest'	=>		$_POST['enquiry'],
				'message'	=>		$_POST['message'],
				);
				
			$this->prepareEMailAttribute();
		
	}
	protected function prepareEmail(){
		$this->fetchPost();
		$this->load->model('email_m');
		if($this->email_m->send_s($this->_postInArray['from'],$this->_postInArray['to'],$this->_postInArray['sub'],$this->_postInArray['msg'])){
			redirect(base_url());
			exit();
		}else{
			$this->_formType = 'contact';	
         redirect(base_url().'app/emi');
			exit();
		}
		
	}
	protected function setRules(){
		$this->form_validation->set_rules('name', 'Name', 'required|alpha|xss_clean');
		$this->form_validation->set_rules('email', 'Email Address', 'required|valid_emails');
		$this->form_validation->set_rules('phone', 'Phone', 'required|numeric');
		$this->form_validation->set_rules('message', 'message', 'xss_clean');
	}
	protected function validateInput(){
		$this->setRules();
		if ($this->form_validation->run() == FALSE){
         $this->_formType = 'contact';	
         $this->prepareView($this->_formType);
      }else{
         $this->prepareEmail();
			
      }
	}
	protected function inputPost(){
		// echo 'input post';
		if($this->_formType == 'contact'){
			$this->prepareView($this->_formType);
		}else if($this->_formType == 'contacti'){
			$this->validateInput();
		}else{
			// echo $this->_formType;
			redirect(base_url());
		}
	}
	
	protected function email(){
		if($method = ''){
			// echo 'no type';
			redirect (base_url());
		}else{
			// echo 'process is '.$method.' and form type is '.$this->_formType;
			$this->inputPost();
		}
	}

	public function index(){
		redirect(base_url());
	}
	
}