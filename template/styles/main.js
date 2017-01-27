$(function() {
  function showCaptionFromAlt(selector){
    $(selector).each(function() {
      $(this).after( '<span class="img-caption">' + $(this).attr('alt') + '</span>' );
    });
  };
  
  // Captions are not automatically shown anymore by default; uncomment to reenable them
  //showCaptionFromAlt("article img");

  function resizableTOC(){
    "use srtict"
    var sidebarTimer = setInterval(function(){
      if(localStorage.getItem('sidebarScroll') != null && $('#sidetoc').length > 0){
        $('#sidetoc').scrollTop(localStorage.getItem('sidebarScroll'));
        clearInterval(sidebarTimer);
      }
    }, 100);
    var activeItemTimer = setInterval(function(){
      if($($('#sidetoc .active.in')[0]).length > 0){
        var amendment = $($('#sidetoc .active.in')[0]).offset().top - 200;
        $('#sidetoc').scrollTop(amendment);
        clearInterval(activeItemTimer);
      }
    })
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
      }, 100)
    }
   
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
  } else {
    localStorage.clear();
  }
  $('#sidetoc').on('scroll', function(){
    localStorage.setItem('sidebarScroll', $(this).scrollTop())
  });

});

