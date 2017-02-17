$(function() {
  function showCaptionFromAlt(selector){
    $(selector).each(function() {
      $(this).after( '<span class="img-caption">' + $(this).attr('alt') + '</span>' );
    });
  };
  
  // Function to start searching when user clicked in the search icon
  $('#search').on('submit', function(e){
    // Remove default events from form
    if (e.preventDefault) { 
       e.preventDefault();
    } else {
       e.returnValue = false; 
    }
    // Activation keys are pressed, which causes the search function
    $('#search-query').trigger('keyup');
  })
  // Captions are not automatically shown anymore by default; uncomment to reenable them
  //showCaptionFromAlt("article img");
});