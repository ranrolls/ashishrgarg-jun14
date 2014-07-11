<div class="mainContent">
	<h1>Email send failure</h1>
	<p>Page will be redirected to homepage in 5 sec automatically</p>
		<script>
		(function() {

   function show_popup(){
      window.location.href = $("a#homepage").attr('href');
   };
   window.setTimeout( show_popup, 5000 ); // 5 seconds
}());
	</script>
</div>
<?php
$fjs = 'success.js';
$footJs = array($fjs);
echo modules::run('cms/exAppFoot', $footJs);
// echo modules::run('cms/exAppFoot');
?>