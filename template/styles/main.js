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
    var startSidebarWidth = $('#sidetoggle').width();
    var contentWidth = $($('.article.grid-right')[0]).width();
    var contentMargin = + $($('.article.grid-right')[0]).css('marginLeft').split('px')[0];
    $('#sidetoggle').resizable({
        containment: ".container.body-content.hide-when-search",
        handles: 'e',
        maxWidth: 570,
        minWidth: startSidebarWidth,
        resize: function(event, ui){
            var sidebarSizeDivide = ui.size.width - startSidebarWidth;
            $($('.article.grid-right')[0]).css({
                'width' : contentWidth - sidebarSizeDivide,
                'marginLeft' : contentMargin + sidebarSizeDivide
            });
            $($('.sidefilter')[0]).css({
                'width' : ui.size.width
            });
        }
    });
  }
  resizableTOC();

  // $(window).on('resize', function(){
  //   $('#sidetoggle').resizable( "destroy" );
  //   resizableTOC();
  // })
});

