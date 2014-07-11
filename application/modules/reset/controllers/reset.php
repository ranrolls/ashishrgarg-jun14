<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Reset extends MX_Controller {
	/*
	 * Testing out Excel_reader library functions
	 * ci + hvmc + template + fa + fc + Excel_reader = cip3 Package
	 */
	public function __construct() {
      parent::__construct();
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
	public function _index($in){
	}
	public function _insert_b($array, $tableName){
	}
	public function _col($table){
	}

}