<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class Event extends MX_Controller {

	protected $_items = array();
	protected $_currentItems = array();

	protected $_startMonth = 04;
	protected $_startYear = 2014;
	protected $_endMonth = 07;
	protected $_endYear = 2014;

	protected $_out = '';
	protected $_key = '';

	public function __construct() {
		parent::__construct();
	}

	protected function processIn() {
	}

	protected function generateCaller() {
		$this->_out = '';
		$apr2014 = '<span>You will be redirected to events page in 5 sec. automatically. To redirect yourself manually <a href="'.
			base_url().'cms/event_apr2014" title="Event for April, 2014" id="eventLink">Click Here</a></span>';
		$may2014 = '<span>You will be redirected to events page in 5 sec. automatically. To redirect yourself manually <a href="'.
			base_url().'cms/event_may2014" title="Event for May, 2014" id="eventLink">Click Here</a></span>';
		$june2014 = '<span>You will be redirected to events page in 5 sec. automatically. To redirect yourself manually <a href="'.
			base_url().'cms/event_june2014" title="Event for June, 2014" id="eventLink">Click Here</a></span>';
		
		$this->_out .= "<script type='text/javascript'>
		var apr2014 = ".$apr2014.";
		var may2014 = ".$apr2014.";
		var jun2014 = ".$apr2014.";
		var codropsEvents = {
				'04-07-2014' : apr2014,
				'04-15-2014' : apr2014,
				'04-21-2014' : apr2014,
				'04-22-2014' : apr2014,
				'04-25-2014' : apr2014,
				'04-28-2014' : apr2014,
				'04-30-2014' : apr2014,
				'05-05-2014' : may2014,
				'05-06-2014' : may2014,
				'05-07-2014' : may2014,
				'05-09-2014' : may2014,
				'05-15-2014' : may2014,
				'05-20-2014' : may2014,
				'05-21-2014' : may2014,
				'05-22-2014' : may2014,
				'05-30-2014' : may2014,
				'05-31-2014' : may2014,
				'06-05-2014' : jun2014,
				'06-06-2014' : jun2014,
				'06-07-2014' : jun2014,
				'06-15-2014' : jun2014,
				'06-21-2014' : jun2014,
				'06-22-2014' : jun2014,
				'06-30-2014' : jun2014,
		};
		</script>
			";
			$this->load->helper('file');
			if ( ! write_file(base_url('img/data.js'), $this->_out)) 
			{
			     return 'false';
			}
			else
			{
			    return 'true';
			}
			
	}

	public function index() {
		$this -> listCurrent();
	}

	protected function init() {
	}
	
	public function js($in){
		if($in){
			echo $this -> generateCaller();
		}
	}
	
	protected function processor($in) {
		// echo 'input for processor function is ', $in;
		$this -> init();
		$this -> _key = $in;
		$this -> processIn();
	}

	protected function listCurrent() {
		echo 'listing all current month events';
	}

	public function _remap($method) {
		if(method_exists($this, $method)) {
			// redirect(base_url());
			$this -> $method();
			// $this -> listAll();
		}else if($method == '') {
			$this -> listCurrent();
		} else {
			$this -> processor($method);
		}
	}

}
