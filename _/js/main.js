// json data calling starts here in plain js and json built in functions

function dataHandler(info) {
	//console.log('take 0');
	var output='';
	for (var i = 0; i <= info.links.length-1; i++) {
	//console.log(i);
		for (key in info.links[i]) {
			if (info.links[i].hasOwnProperty(key)) {
	//console.log(key);
				output += '<li>' + 
				'<a href = "' + info.links[i][key] +
				'">' + key + '</a>';
				'</li>';
	    }   
		}
	}

	var update = document.getElementById('links');
	update.innerHTML = output;

}

//json data working ends here
(function() {
	    // Place any jQuery/helper plugins in here.
		//special click handling to make widget work remove after nav changes in 1.4
	// $(document).find("ul.jqm-list").click(function( e ) {
		// alert('toggle');
	// });
	// alert('toggle');
	// location.reload();
	$(document).on("click","a",(function( e ) {
		window.location.href = $(this).attr('href');
	}));
	$('li.menuHeader > a').attr('href', '#');
	$('li.menuHeader > a').removeClass();
	
	
	// $(document).bind("mobileinit", function(){
	  // $.mobile.pageLoadErrorMessage = 'processing page';
	// });
}());
	// $(document).bind("mobileinit", function(){
	  // $.mobile.pageLoadErrorMessage = 'processing page';
	// });