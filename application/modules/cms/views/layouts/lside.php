<div data-role="panel" id="leftNav" class="jqm-navmenu-panel" data-position="left" data-display="overlay" data-theme="a">
	<?php
		$get = '';
		$get = modules::run('menu/gm','leftMenu','jqMobile');
		echo $get;
	?>
</div><!-- /panel -->