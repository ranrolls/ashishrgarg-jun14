<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');
class Excel_crud_m extends CI_Model {
	public function __construct() {
		parent::__construct();
		$this -> load -> database();
	}
	private function check_unique($tbl_name, $column, $check_value) {
		$this->load->database();
		$sql_where = array($column => $check_value);
		$this -> db -> select($column) -> from($tbl_name) -> where($sql_where);
		$q = $this -> db -> count_all_results();
		if($q > 0 || $check_value==''){
			return false;
		} else {
			return true;
		}
	}

	private function check_headers($cols) {
		if(is_array($cols)) {
		
		} else {
			return false;
		}
	}

	public function write_download() {
		//load our new PHPExcel library
		$this -> load -> library('excel');
		//activate worksheet number 1
		$this -> excel -> setActiveSheetIndex(0);
		//name the worksheet
		$this -> excel -> getActiveSheet() -> setTitle('test worksheet');
		//set cell A1 content with some text
		$this -> excel -> getActiveSheet() -> setCellValue('A1', 'This is just some text value');
		//change the font size
		$this -> excel -> getActiveSheet() -> getStyle('A1') -> getFont() -> setSize(20);
		//make the font become bold
		$this -> excel -> getActiveSheet() -> getStyle('A1') -> getFont() -> setBold(true);
		//merge cell A1 until D1
		$this -> excel -> getActiveSheet() -> mergeCells('A1:D1');
		//set aligment to center for that merged cell (A1 to D1)
		$this -> excel -> getActiveSheet() -> getStyle('A1') -> getAlignment() -> setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		$filename = base_url() . '_u/x2.xls';
		//save our workbook as this file name
		header('Content-Type: application/vnd.ms-excel');
		//mime type
		header('Content-Disposition: attachment;filename="' . $filename . '"');
		//tell browser what's the file name
		header('Cache-Control: max-age=0');
		//no cache

		//save it to Excel5 format (excel 2003 .XLS file), change this to 'Excel2007' (and adjust the filename extension, also the header mime type)
		//if you want to save it as .XLSX Excel 2007 format
		$objWriter = PHPExcel_IOFactory::createWriter($this -> excel, 'Excel5');
		//force user to download the Excel file without writing it to server's HD
		$objWriter -> save('php://output');
	}

	public function write_disk($in, $out) {
		echo date('H:i:s'), " Write to Excel2007 format", EOL;
		$callStartTime = microtime(true);

		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
		// $objWriter->save(str_replace('.php', '.xlsx', __FILE__));
		$objWriter -> save(str_replace('.php', '.xlsx', $out));

		$callEndTime = microtime(true);
		$callTime = $callEndTime - $callStartTime;

		echo date('H:i:s'), " File written to ",  str_replace('.php', '.xlsx', pathinfo(__FILE__, PATHINFO_BASENAME)), EOL;
		echo 'Call time to write Workbook was ',  sprintf('%.4f', $callTime), " seconds", EOL;
		// Echo memory usage
		echo date('H:i:s'), ' Current memory usage: ', (memory_get_usage(true) / 1024 / 1024), " MB", EOL;

		// Echo memory peak usage
		echo date('H:i:s'), " Peak memory usage: ", (memory_get_peak_usage(true) / 1024 / 1024), " MB", EOL;

		// Echo done
		echo date('H:i:s'), " Done writing file", EOL;
		echo 'File has been created in ',  getcwd(), EOL;
	}
	public function read_excel($in, $unique = '', $tbl_name = '', $insert = false) {
		// $this->load->library('typography');
		// unique
		if(!file_exists($in)) {
			echo $in . '<br />';
			echo "File given not found ==> " . $in;
		} else {
			// echo 'File Found Success ==>  ' . $in . '<br />';
			error_reporting(E_ALL);
			ini_set('display_errors', TRUE);
			ini_set('display_startup_errors', TRUE);
			define('EOL', (PHP_SAPI == 'cli') ? PHP_EOL : '<br />');
			/** Include PHPExcel_IOFactory */
			require_once dirname(__FILE__) . '/../Classes/PHPExcel/IOFactory.php';
			// echo date('H:i:s'), " Load from Excel2007 file", EOL;
			$callStartTime = microtime(true);
			$objPHPExcel = PHPExcel_IOFactory::load($in);
			foreach($objPHPExcel->getWorksheetIterator() as $worksheet) {
				if($worksheet -> getTitle() != 'Sheet1' && $worksheet -> getTitle() != 'Sheet2' && $worksheet -> getTitle() != 'Sheet3' && $worksheet -> getTitle() != 'Sheet4' && $worksheet -> getTitle() != 'Sheet5') {
					// $tableName = $worksheet -> getTitle();
					$currentRow = 0;
					foreach($worksheet->getRowIterator() as $row) {
						$rowNum = $row -> getRowIndex();
						$cellIterator = $row -> getCellIterator();
						$cellIterator -> setIterateOnlyExistingCells(false);
						if($rowNum == 1) {
							$totalRow = 1;
							$currentCell = 0;
							foreach($cellIterator as $cell) {
								if(!is_null($cell)) {
									if(!is_null($cell -> getCalculatedValue())) {
										$header[$currentCell] = $cell -> getCalculatedValue();
									}
								}
								$currentCell++;
							}
						} else {
							$totalRow++;
							$currentCell = 0;
							foreach($cellIterator as $cell) {
								if(!is_null($cell)) {
									if(!is_null($cell -> getCalculatedValue())) {
										$currentValue = $this->db->escape($cell -> getCalculatedValue());
										// echo $currentValue;
										if($unique != '' && $tbl_name != '') {
											// echo 'value for header is '.$header[$currentCell].' and value for unique is '.$unique.'<br/>'.
												// ' incomming value is '.$currentValue;
											if($header[$currentCell] == $unique){
												if(($this -> check_unique($tbl_name, $unique, $currentValue)) == true) {
														// echo 'value for title is '.$currentValue.' ';
													$rowInner[$header[$currentCell]] = $currentValue;
												} else {
$errorMsg = 'all ' . $unique . ' must be unique. title at row number '.
	($totalRow - 1).' already prensent in database. Duplicate Entry! not allowed';
													return $errorMsg;
													exit();
												}
											}else {
												// max length for excel cell content is 32760 characters
												$rowInner[$header[$currentCell]] = $currentValue;
											}
										} else if($tbl_name == 'menu_item' 
											&& $cell -> getCalculatedValue() > 0 
											&& $header[$currentCell] == 'parent_menuitem'){
$rowInner[$header[$currentCell]] = $this->getMenuItemId($cell -> getCalculatedValue(),$rowInner[$header[0]],$tbl_name);
										} else {
											// echo 'check1';
											$rowInner[$header[$currentCell]] = $cell -> getCalculatedValue();
										}
									}else{
										if($unique != '' && $header[$currentCell] == $unique){
											$errorMsg = 'all ' . $unique . ' must be unique. title at row number '.($totalRow - 1).' already prensent in database. Blank Entry! not allowed';
											return $errorMsg; exit();
										}else{
											$rowInner[$header[$currentCell]] = '';
										}	
									}
								}
								$currentCell++;
							}
							if($insert == true){
								$this->load->model('crud/db_crud_m');
								// print_r($rowInner);
								$this->db_crud_m->insert_s($rowInner,$tbl_name);
							}
							$rows[$currentRow] = $rowInner;
							$currentRow++;
						}
					}
					return $rows;
				}//worksheet name checked by if ends here
			}// for each worksheet ends
		}//file exists ends here
	}

	private function getMenuItemId($in,$menuName, $tbl){
		$this->load->model('crud/db_crud_m');
		$offset = $in - 1;
		$s = "SELECT menuitem_id FROM ".$tbl." WHERE `parent_menu`='".$menuName."' ORDER BY menuitem_id LIMIT 1 OFFSET ".$offset;
		// echo $s;
		$out = $this->db_crud_m->custom_query($s);
		// print_r($out);
		return $out[0]['menuitem_id'];
	}
}