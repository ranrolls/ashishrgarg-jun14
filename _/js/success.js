(function() {

   function show_popup(){
      window.location.href = $("a#homepage").attr('href');
   };
   window.setTimeout( show_popup, 5000 ); // 5 seconds
}());