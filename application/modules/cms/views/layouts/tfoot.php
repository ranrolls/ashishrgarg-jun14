<div class="tfoot">
	<div class="ui-grid-c ui-responsive bottom-main-content">
		<div class="ui-block-a">
			<div class="jqm-block-content">
				<h3>BROWSE</h3>
	<?php
		$foot1 = modules::run('menu/gm','foot1','jqFoot');
		echo $foot1;
	?>
			</div>
		</div>
		<div class="ui-block-b">
			<div class="jqm-block-content">
				<h3>What We Do ?</h3>
	<?php
	$get = '';
		$get = modules::run('menu/gm','foot2','jqFoot');
		echo $get;
	?>
			</div>
		</div>
		<div class="ui-block-c">
			<div class="jqm-block-content">
				<h3>Other Services</h3>
	<?php
	$get = '';
		$get = modules::run('menu/gm','foot3','jqFoot');
		echo $get;
	?>
			</div>
		</div>
		<div class="ui-block-d">
			<div class="jqm-block-content">
				<h3>Important Links</h3>
	<?php
	$get = '';
		$get = modules::run('menu/gm','foot4','jqFoot');
		echo $get;
	?>
			</div>
		</div>
	</div>
	<div class="ui-grid-c ui-responsive bottom-main-content">
			<div class="wTh">
				Contact Address: <?php echo $this->config->item('contact_address'); ?>
			</div>
			<div class="wO">
				<a href="facebook.com/brennstoffmarcom" title="JoinUsAtFacebook">Join us at Facebook</a>
			</div>
	</div>
</div>