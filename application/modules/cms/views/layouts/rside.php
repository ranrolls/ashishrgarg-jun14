<div data-role="panel" id="rightNav" class="jqm-navmenu-panel rightMenu" data-position="right" data-display="overlay" data-theme="a">
	<?php
		$get = '';
		$get = modules::run('menu/gm','rightMenu','jqMobile');
		echo $get;
	?>
</div><!-- /panel -->