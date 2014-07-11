<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Excel_menu extends MX_Controller {
	
	public function __construct() {
        parent::__construct();
        $this->load->helper('url');
    }
	
	public function index(){	
		redirect(base_url());
	}
	
	public function read_ex($filepath=''){
		//	SELECT menuitem_id FROM `menu_item` WHERE `parent_menu`='menu1' ORDER BY menuitem_id LIMIT 1 OFFSET 3
		if(!$filepath){ exit('Wrong Input'); }else{	$filepath = './_u/'.$filepath.'.xls';	}
		$this->load->model('crud/excel_crud_m');
		$tbl = 'menu_item';
		$unique_field = '';
		$dataRows = $this->excel_crud_m->read_excel($filepath, $unique_field, $tbl,true);
		if(is_array($dataRows)){
			// print_r($dataRows);
			// if($this->excel_crud_m->insert_b($dataRows,$tbl)){
				// echo 'Data send for '.$tbl.' successfully inserted to database.';
			// }else{
				// echo 'No Data insertion';
			// }
			echo 'ok';
		}else if(is_string($dataRows)){
			echo $dataRows;
		}
	}
	
	private function validate_header($dataRead){
		$workArray = $dataRead;
		$this->load->model('crud/excel_crud_m');
		$dataRead = $this->excel_crud_m->check_required_cols($hay,$stack);		
	}
}