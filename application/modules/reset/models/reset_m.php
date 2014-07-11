<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Crud_m extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	public function openDiv($li) {
		if(!empty($li)) {
			$c = '<div ' . $li . '>';
		} else {
			$c = '<div>';
		}
		return $c;
	}
	public function feedP($s) {
		if(!empty($s)) {
			$c = '<p>' . $s . '</p>';
		}
		return $c;
	}

	public function feedImg($l, $t = '') {
		if(!empty($l)) {
			$c = '<img title="' . $t . '" src="' . base_url() . '_u/img/' . $l . '" >';
		}
		return $c;
	}

	public function closeDiv($li) {
		if(!empty($li)) {
			$c = '</div>';
		} else {
			$c = '</div>';
		}
		return $c;
	}

	public function feedH($t, $s = '',$n = '1') {
		if(!empty($t)) {
			$c = '<h'.$n.' '.$s . ' >' . $t . '</h'.$n.'>';
		} else {
			$c = '<h'.$n.'>Welcome to ' . $this -> config -> item('site_name') . '</h'.$n.'>';
		}
		return $c;
	}
	public function no_slashes($array)
   {
   	$this->load->helper('string');
		// $this->load->library('typography');
		// $this->load->helper('text');
		// $a = '\"';
		// $b = '"';
		$disallowed = array($a);
		// $string = word_censor($string, $disallowed, 'Beep!');
		
		foreach($array as $key=>$value)
		{
			if(is_array($value))
			{
			      $value=no_slashes($value);
			      $array_temp[$key]=$value;                        
			}
			else
			{
				// str_replace("world","Peter","Hello world!");
			$array_temp[$key]=  stripslashes(strip_quotes($value));
			// $array_temp[$key]=stripslashes($value);
			}
		}        
		return $array_temp; 
   }
}