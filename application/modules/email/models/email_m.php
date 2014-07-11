<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Email_m extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
		$this->load->library('email');
		$config['mailtype'] = 'html';
		$this->email->initialize($config);
	}
	
	public function send_s($from,$to,$sub,$msg){
		$this->load->library('email');
		$config['mailtype'] = 'html';
		$this->email->initialize($config);
		
		$this->email->from($from,'Name');
		$this->email->to($to);
		$this->email->subject($sub);
		// $this->email->attach('./ups/a.jpg');
		// $this->email->message('Message can include html formatting <strong> bold </strong>. And much more can be done in formatting.');
		$this->email->message($msg);
		
		if($this->email->send()){
			$this->email->clear();	
			return true;
		}else{
			$this->email->clear();
			return false;
		}
		
		
	}
}