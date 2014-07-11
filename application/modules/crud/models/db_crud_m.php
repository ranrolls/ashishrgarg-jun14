<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');
class Db_crud_m extends CI_Model {
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}	
	public function custom_query($sql){
		$q = $this->db->query($sql);
		return $q->result_array();
	}
	public function getWhere($tbl,$w = '',$row=false,$rowNumber='1'){
		$noquotes = false;	
		if($tbl == 'page'){
			$this->load->model('crud/crud_m');
			$noquotes = true;
		}
		$q = $this->db->get_where($tbl,$w);
		if($row == true){
			if($noquotes){
				return $this->crud_m->no_slashes($q->row_array($rowNumber));
			}else{
				return $q->row_array($rowNumber);
			}
		}else{
			if($noquotes){
				return $this->crud_m->no_slashes($q->row_array());
			}else{
				return $q->row_array();
			}
		}
	}
	public function insert_b($array, $tableName) {
		$this -> db -> insert_batch($tableName, $array);
		return $this->db->insert_id();
	}
	public function insert_s($array, $tableName) {
		$this -> db -> insert($tableName, $array);
		if($this->db->insert_id()){
			return $this->db->insert_id();
		}else{
			echo 'error in single record insertion from crud/db_curd_m/';
		}
	}
	public function max_from($col='', $tbl,$w = ''){
		$this->db->select_max($col)->from($tbl)->where($w)->limit(1);
		return $this->db->get()->result_array();
	}
	public function count_by($tbl = 'menu_item', $w){
		$q = $this->db->get_where($tbl, $w);
		return $q->num_rows();
	}
	public function update_s($tbl, $dt = '', $w = '') {
		if($dt !== '') {
			if($this -> db -> update($tbl, $dt, $w)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
}