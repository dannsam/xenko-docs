$(function() {
  function showCaptionFromAlt(selector){
    $(selector).each(function() {
      $(this).after( '<span class="img-caption">' + $(this).attr('alt') + '</span>' );
    });
  };
  
  $('#search').on('submit', function(e){
    if (e.preventDefault) { 
       e.preventDefault();
    } else {
       e.returnValue = false; 
    }
    $('#search-query').trigger('keyup');
  })
  // Captions are not automatically shown anymore by default; uncomment to reenable them
  //showCaptionFromAlt("article img");
});