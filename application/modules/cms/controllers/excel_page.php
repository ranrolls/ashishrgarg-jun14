<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');

class Excel_page extends MX_Controller {
	/*
	 * Control excel to db
	 * ci + hvmc + template + fa + fc + Excel_reader = cip3 Package
	 */
	protected $tbl = 'page';
	protected $unique_field = 'title';

	public function __construct() {
		parent::__construct();
		// Load the spreadsheet reader library
		$this -> load -> helper('url');
	}

	protected function insert_b($array, $tableName) {
		$this -> load -> model('page_m');
		$this -> page_m -> insert_m($array, $tableName);
	}

	public function index() {
		$this -> process();
	}

	protected function process() {
		$in = "./_u/x2.xls";
		$out = "./_u/o2.xls";
	}

	protected function write_download() {
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

	protected function write_disk($in, $out) {
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

	public function process_excel($filepath) {
		if(!$filepath) { exit('Wrong Input');
		} else {
			$filepath = './_u/' . $filepath . '.xls';
		}
		$this -> load -> model('crud/excel_crud_m');
		$this -> load -> model('crud/db_crud_m');
		$tbl = 'page';
		$unique_field = 'title';
		// echo '<br /> Table Name is '.$tbl.'<br />Unique feild must be '.$unique_field;
		$dataRows = $this -> excel_crud_m -> read_excel($filepath, $unique_field, $tbl,true);
		// echo '<br />this excel sheet is good<br />';
		if(is_array($dataRows)) {
			echo 'Data send for ' . $tbl . ' successfully inserted to database.';
		}else if(is_string($dataRows)) {
			echo $dataRows;
		}
	}

}
