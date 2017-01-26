$(function() {
  function showCaptionFromAlt(selector){
    $(selector).each(function() {
      $(this).after( '<span class="img-caption">' + $(this).attr('alt') + '</span>' );
    });
  };
  
  // Captions are not automatically shown anymore by default; uncomment to reenable them
  //showCaptionFromAlt("article img");

  function resizableTOC(){
    if(localStorage.getItem('sizes') != null){
      var sizes = JSON.parse(localStorage.getItem('sizes'));
      $('#sidetoggle').css('width', sizes.sidebarWidth);      
      $($('.article.grid-right')[0]).css({
          'width' : sizes.contentWidth,
          'marginLeft' : sizes.contentMargin
      });
      var filterTimer = setInterval(function(){
        if($($('.sidefilter')[0]).length > 0){
          $($('.sidefilter')[0]).css('width', sizes.sidebarWidth);
          clearInterval(filterTimer)
        }
      })
    }
    "use srtict"
    var startSidebarWidth = $('#sidetoggle').width();
    var contentWidth = $($('.article.grid-right')[0]).width();
    var contentMargin = + $($('.article.grid-right')[0]).css('marginLeft').split('px')[0];
    $('#sidetoggle').resizable({
        containment: ".container.body-content.hide-when-search",
        handles: 'e',
        maxWidth: 570,
        minWidth: 140,
        resize: function(event, ui){
            var sidebarSizeDivide = ui.size.width - startSidebarWidth;
            var sizes = {
              sidebarWidth  : ui.size.width,
              contentWidth  : contentWidth - sidebarSizeDivide,
              contentMargin : contentMargin + sidebarSizeDivide
            }
            $($('.article.grid-right')[0]).css({
                'width' : sizes.contentWidth,
                'marginLeft' : sizes.contentMargin
            });
            $($('.sidefilter')[0]).css('width', sizes.sidebarWidth);
            localStorage.setItem('sizes', JSON.stringify(sizes))
        }
    });
  }
  if($('#sidetoggle').length > 0){
    resizableTOC();
  }

});

