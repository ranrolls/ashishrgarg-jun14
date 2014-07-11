<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Menu_m extends CI_Model {
	
	public function insert_b($dt){
		$this->load->database();	
		$this->db->insert_batch('menu_items',$dt);
		if($this->db->insert_id()){
			return true;
		}else{
			return false;
		}
	}
	
	public function get($count,$pid=0,$m = 'menu1'){
		$this->load->database();	
		$w=array(
			
			'parent_menuitem'			=>		$pid,
			'parent_menu'		=>		$m
		);
		$this->db->select()->from('menu_item')->where($w);
		$query = $this->db->get();
		if($count == true){
			return $query->num_rows();
		}else{
			return $query->result();
		}
	}
	
}