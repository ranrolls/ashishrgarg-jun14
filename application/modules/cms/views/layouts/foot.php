	</div><!-- /page -->
	
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
	<script src="<?php echo base_url(); ?>_/js/vendor/jquery-1.9.1.min.js"></script>
	<script src="<?php echo base_url(); ?>_/js/vendor/index.js"></script>
	<script src="<?php echo base_url(); ?>_/js/vendor/jquery.mobile-1.4.0.min.js"></script>
	
	<!--	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>	-->
	<script>window.jQuery || document.write('<script src="<?php echo base_url(); ?>_/js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
	 
	<script src="<?php echo base_url(); ?>_/js/jquery.excoloSlider.min.js"></script>
	<link href="<?php echo base_url(); ?>_/css/jquery.excoloSlider.css" rel="stylesheet" />
	<script>        $(function () {       $("#sliderB").excoloSlider();       });    </script> 
	 
	<link rel="stylesheet/less" href="<?php echo base_url(); ?>_/css/cs.less" type="text/css"><!-- your custom lesss css here -->
	<script src="<?php echo base_url(); ?>_/js/vendor/less.js"></script>
	<link rel="stylesheet" href="<?php echo base_url(); ?>_/css/cs.css"><!-- your custom css here -->  		
	
	
	<script src="<?php echo base_url(); ?>_/js/plugins.js"></script><!-- plugin.js is your custom js use anyway you like in jQ  -->
	<script src="<?php echo base_url(); ?>_/js/main.js"></script>
	
	<?php
		foreach($cssFoot as $cs1){
			echo '<link rel="stylesheet" href="'.base_url().'_/css/'.$cs1.'" type="text/css" />';
		}
		foreach($cssXF as $cs2){
			echo '<link rel="stylesheet" href="'.$cs2.'" type="text/css" />';
		}
		foreach($jsFoot as $js1){
			echo '<script src="'.base_url().'_/js/'.$js1.'" ></script>';
		}
		foreach($jsXF as $js2){
			echo '<script src="'.$js1.'" ></script>';
		}
	?>
	
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>_/css/calendar.css" />
	
	<script type="text/javascript" src="<?php echo base_url(); ?>_/js/cal/modernizr.custom.63321.js"></script>	
	<script type="text/javascript" src="<?php echo base_url(); ?>_/js/cal/jquery.calendario.js"></script>
	
				
	<?php
		// $get = '';
		// $get = modules::run('event/js','r');
		// echo '<!-- result for data.js is '.$get.' -->';
		// echo '<script type="text/javascript" src="'.base_url().'img/data.js"></script>';
	?>
		
		
	<script type="text/javascript">
		var head = '<span>You will be redirected to events page in 5 sec. automatically. To redirect yourself manually <a href="';
		var tail = '" id="eventLink">Click Here</a></span>';
	
		var apr2014 = head + '<?php echo base_url("cms/event_apr_2014")?>" title="Event for April, 2014' + tail;
		var may2014 = head + '<?php echo base_url("cms/event_may_2014")?>" title="Event for May, 2014' + tail;
		var jun2014 = head + '<?php echo base_url("cms/event_june_2014")?>" title="Event for June, 2014' + tail;

		var codropsEvents = {
				'04-07-2014' : apr2014,
				'04-15-2014' : apr2014,
				'04-21-2014' : apr2014,
				'04-22-2014' : apr2014,
				'04-25-2014' : apr2014,
				'04-28-2014' : apr2014,
				'04-30-2014' : apr2014,
				'05-05-2014' : may2014,
				'05-06-2014' : may2014,
				'05-07-2014' : may2014,
				'05-09-2014' : may2014,
				'05-15-2014' : may2014,
				'05-20-2014' : may2014,
				'05-21-2014' : may2014,
				'05-22-2014' : may2014,
				'05-30-2014' : may2014,
				'05-31-2014' : may2014,
				'06-05-2014' : jun2014,
				'06-06-2014' : jun2014,
				'06-07-2014' : jun2014,
				'06-15-2014' : jun2014,
				'06-21-2014' : jun2014,
				'06-22-2014' : jun2014,
				'06-30-2014' : jun2014,
		};
		$(function() {
			$(document).on('click','div.fc-content',function (evt) { 
				// alert($('a#eventLink').attr('href'));
				window.location.href = $('a#eventLink').attr('href'); 
			});
		});
	</script>	
		
	<script type="text/javascript">
		$(function() {
		
			var transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				},
				transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
				$wrapper = $( '#custom-inner' ),
				$calendar = $( '#calendar' ),
				cal = $calendar.calendario( {
					onDayClick : function( $el, $contentEl, dateProperties ) {

						if( $contentEl.length > 0 ) {
							showEvents( $contentEl, dateProperties );
						}

					},
					caldata : codropsEvents,
					displayWeekAbbr : true
				} ),
				$month = $( '#custom-month' ).html( cal.getMonthName() ),
				$year = $( '#custom-year' ).html( cal.getYear() );

			$( '#custom-next' ).on( 'click', function() {
				cal.gotoNextMonth( updateMonthYear );
			} );
			$( '#custom-prev' ).on( 'click', function() {
				cal.gotoPreviousMonth( updateMonthYear );
			} );

			function updateMonthYear() {				
				$month.html( cal.getMonthName() );
				$year.html( cal.getYear() );
			}

			// just an example..
			function showEvents( $contentEl, dateProperties ) {

				hideEvents();
				
				var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>' ),
					$close = $( '<span class="custom-content-close"></span>' ).on( 'click', hideEvents );

				$events.append( $contentEl.html() , $close ).insertAfter( $wrapper );
				
				setTimeout( function() {
					$events.css( 'top', '0%' );
				}, 25 );

			}
			function hideEvents() {

				var $events = $( '#custom-content-reveal' );
				if( $events.length > 0 ) {
					
					$events.css( 'top', '100%' );
					Modernizr.csstransitions ? $events.on( transEndEventName, function() { $( this ).remove(); } ) : $events.remove();

				}

			}
		
		});
	</script>
	
	<!-- <div id="delayScripts"></div>		-->
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src='//www.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));
</script>	
</body>
</html>
