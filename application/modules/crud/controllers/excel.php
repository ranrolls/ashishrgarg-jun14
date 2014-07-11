<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class _Excel extends MX_Controller {
	/*
	 * Testing out Excel_reader library functions
	 * ci + hvmc + template + fa + fc + Excel_reader = cip3 Package
	 */
	public function __construct() {
      parent::__construct();
        // Load the spreadsheet reader library
		$this->load->helper('url');
    }
	public function _index($in){
		$this->read_excel($in);
	}
	
	public function _insert_b($array, $tableName){
		$this->load->model('crud/crud_m');
		$this->crud_m->insert_m($array, $tableName);
	}
	public function _col($table){
		$this->load->model('excel_crud_m');
		$o = $this->excel_crud_m->getColumnNames($table);
		if(is_array($o)) print_r($o);
		
	}
}