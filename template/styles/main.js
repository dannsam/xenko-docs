$(function() {
  function showCaptionFromAlt(selector){
    $(selector).each(function() {
      $(this).after( '<span class="img-caption">' + $(this).attr('alt') + '</span>' );
    });
  };
  
  // Captions are not automatically shown anymore by default; uncomment to reenable them
  //showCaptionFromAlt("article img");

  // Control the sizes of sidebar and content part (saved, dynamic changed, etc.)
  function apiDocSizeControl(){
      "use srtict"
      function resizableTOC(){      
      // If object "sizes" saved already
      if(localStorage.getItem('sizes') != null){
        // Get the sizes from local storage
        var sizes = JSON.parse(localStorage.getItem('sizes'));
        // Set width to sidebar
        $('#sidetoggle').css('width', sizes.sidebarWidth);
        // Set width and margin to content part
        $($('.article.grid-right')[0]).css({
            'width' : sizes.contentWidth,
            'marginLeft' : sizes.contentMargin
        });
        // Wait, while filter is aviable
        var filterTimer = setInterval(function(){
          if($($('.sidefilter')[0]).length > 0){
            // Set filter width
            $($('.sidefilter')[0]).css('width', sizes.sidebarWidth);
            $($('.sidefilter')[0]).show();
            // Clear inteval for filter
            clearInterval(filterTimer);
          }
        }, 100);
        $('.container.body-content.hide-when-search').show();
      // If object "sizes" don't saved
      } else {
        $('.container.body-content.hide-when-search').show();
      }
      // Get started space parameters
      var startSidebarWidth = $('#sidetoggle').width();
      var contentWidth = $($('.article.grid-right')[0]).width();
      var contentMargin = + $($('.article.grid-right')[0]).css('marginLeft').split('px')[0];
      // Start resizable function
      $('#sidetoggle').resizable({
          containment: ".container.body-content.hide-when-search",
          handles: 'e',
          maxWidth: 570,
          minWidth: 140,
          resize: function(event, ui){
              // Get difference in sizes between start and end
              var sidebarSizeDivide = ui.size.width - startSidebarWidth;
              // Create "Sizes" object
              var sizes = {
                sidebarWidth  : ui.size.width,
                contentWidth  : contentWidth - sidebarSizeDivide,
                contentMargin : contentMargin + sidebarSizeDivide
              }
              // Set sizes for content part
              $($('.article.grid-right')[0]).css({
                  'width' : sizes.contentWidth,
                  'marginLeft' : sizes.contentMargin
              });
              // Set sizes for filter
              $($('.sidefilter')[0]).css('width', sizes.sidebarWidth);
              localStorage.setItem('sizes', JSON.stringify(sizes))
          }
      });
    }
      // If user on the one of the doc page (API, Manual, ReleaseNotes)
    if($('#sidetoggle').length > 0){
      resizableTOC();
      var filterTimer = setInterval(function(){
        if($($('.sidefilter')[0]).length > 0){
          $($('.sidefilter')[0]).show();
          // Clear inteval for filter
          clearInterval(filterTimer);
        }
      }, 100);
      // If user on start page or somewhere else
    } else {
      $('.container.body-content.hide-when-search').show();
      localStorage.clear();
    }
  }

  function apiSidebarStructureControl(){
    var tocInterval = setInterval(function(){
      if($('#toc').length > 0){
        clearInterval(tocInterval);
        if(localStorage.getItem('sidebarStructure') != null){
          getActiveItems();
          localStorage.clear();
        }
        setActiveItems();
      }
    }, 100)
  }

  function setActiveItems(){
    $('#toc ul li a').on('click', function(){
      var activeItems = [];
      $('#toc ul li.in a').each(function(){
        if($(this).parent().hasClass('in')){
          activeItems.push($(this).attr('title'));
        };
      });
      var sidebarStructure = {
        activeItems : activeItems,
        scroll : $('#sidetoc').scrollTop()
      }
      localStorage.setItem('sidebarStructure', JSON.stringify(sidebarStructure));
    })
  }
  function getActiveItems(){
    var sidebarStructureOut = JSON.parse(localStorage.getItem('sidebarStructure'));
    var savedActiveItems = sidebarStructureOut.activeItems;
    for (var i = 0; i < savedActiveItems.length; i++) {
      $('#toc ul li a[title="' + savedActiveItems[i] + '"]').each(function(){
        $(this).parent().addClass('in');
      })
    }
    $('#sidetoc').scrollTop(sidebarStructureOut.scroll)
  }
  apiDocSizeControl();
  apiSidebarStructureControl();
});

