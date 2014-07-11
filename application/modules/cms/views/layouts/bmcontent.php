
<div class="ui-grid-a ui-responsive bottom-main-content-1">
	<div class="ui-block-a">
		<div class="jqm-block-content">
			<h3>News & Updates</h3>
			<marquee direction="up"  scrollamount='3' onmouseover='stop()' ; onmouseout='start();' scrollamount='4'  scrolldelay=200 behavior="alternate">
<?php
	$get = '';
	$get = modules::run('feed/sample','ca-news');
	echo $get;
?>
			</marquee>
		</div>
	</div>
	<div class="ui-block-b">
		<div class="jqm-block-content">
			<h3>Tax Calender</h3>
			<div class="custom-calendar-wrap">
			<div id="custom-inner" class="custom-inner">
				<div class="custom-header clearfix">
					<nav>
						<span id="custom-prev" class="custom-prev"></span>
						<span id="custom-next" class="custom-next"></span>
					</nav>
					<h2 id="custom-month" class="custom-month"></h2>
					<h3 id="custom-year" class="custom-year"></h3>
				</div>
				<div id="calendar" class="fc-calendar-container"></div>
			</div>
			</div>
		</div>
	</div>
</div>
</div><!-- /content -->