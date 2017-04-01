$(function() {

  var MOBILECONS = 767;

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
              var filter = $($('.sidefilter')[0]);
              // Set filter width
              filter.css('width', sizes.sidebarWidth);
              filter.show();
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
            var filter = $($('.sidefilter')[0])
            filter.show();
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
    if($(window).width() > MOBILECONS){
      apiDocSizeControl();
      apiSidebarStructureControl();
    } else {
      localStorage.clear();
    }
    $(window).on('resize', function(){
      removeResizable();
      if($(window).width() > MOBILECONS){
        $('.container.body-content.hide-when-search').show();
      } else {
        localStorage.clear();
      }
    })
    function removeResizable(){
      if($(window).width() <= MOBILECONS){
       $($('.article.grid-right')[0]).removeAttr('style');
       $($('#sidetoggle')[0]).removeAttr('style');
       var filterTimer = setInterval(function(){
            if($($('.sidefilter')[0]).length > 0){
              var filter = $($('.sidefilter')[0])
              filter.removeAttr('style');
              // Clear inteval for filter
              clearInterval(filterTimer);
            }
          }, 100);
      }
    }
    function redirectToCurrentDocVersion(){
      // Set current doc version at start of page
      if($('#xk-current-version').length > 0){
        var urlVersion = window.location.pathname.split('/')[1]
        switch(urlVersion){
          case 'latest':
            console.log('latest');
            $("#xk-current-version").val("latest");
            break;
          case '1.10':
            console.log('1.10');
            $("#xk-current-version").val("1.10");
            break;
          case '1.9':
            console.log('1.9');
            $("#xk-current-version").val("1.9");
            break;
          case '1.8':
            console.log('1.8');
            $("#xk-current-version").val("1.8");
            break;
          case '1.7':
            console.log('1.7');
            $("#xk-current-version").val("1.7");
            break;
          case '1.6':
            console.log('1.6');
            $("#xk-current-version").val("1.6");
            break;
          case '1.5':
            console.log('1.5');
            $("#xk-current-version").val("1.5");
            break;
          case '1.4':
            console.log('1.4');
            $("#xk-current-version").val("1.4");
            break;
          default:
            console.log('default');
            $("#xk-current-version").val("latest");
        }
      }
      $('#xk-current-version').on('change', function(){
        // console.log($("#xk-current-version" ).val())
        var hostVersion = window.location.host;
        var pathVersion = window.location.pathname;
        var sectionVersion;
        if(/manual/.test(pathVersion)){
          sectionVersion = 'manual'
        } else if(/api/.test(pathVersion)){
          sectionVersion = 'api'
        } else if (/ReleaseNotes/.test(pathVersion)){
          sectionVersion = 'ReleaseNotes'
        }
        var newAddress = '//' + hostVersion + '/' + $("#xk-current-version" ).val() + '/' + sectionVersion
        console.log(newAddress);
        $(window).attr('location', newAddress);
      })
    }
    redirectToCurrentDocVersion();
});

