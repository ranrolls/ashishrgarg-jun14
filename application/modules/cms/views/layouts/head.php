<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php echo $title; ?></title>
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="stylesheet"  href="<?php echo base_url(); ?>_/css/jquery.mobile-1.4.0.min.css" />
	<link rel="stylesheet" href="<?php echo base_url(); ?>_/css/jqm-demos.css" />

	<?php
		foreach($cssHead as $cs1){
			echo '<link rel="stylesheet" href="'.base_url().'_/css/'.$cs1.'" type="text/css" />';
		}
		foreach($cssXH as $cs2){
			echo '<link rel="stylesheet" href="'.$cs2.'" type="text/css" />';
		}
		foreach($jsHead as $js1){
			echo '<script src="'.base_url().'_/js/'.$js1.'" ></script>';
		}
		foreach($jsXH as $js2){
			echo '<script src="'.$js1.'" ></script>';
		}
	?>


</head>
<body>
	<div data-role="page" class="jqm-demos wrapper" style="position:relative !important;">
		