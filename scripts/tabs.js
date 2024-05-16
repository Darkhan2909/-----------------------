$(document).ready(function() {
    const $tabs = $(".tab-item");
    const $panes = $(".tab-pane");
  
    const $tabActive = $(".tab-item.active");
    const $line = $(".tabs .line");
  
    // SonDN fixed - Active size wrong size on first load.
    // Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
    requestIdleCallback(function () {
      $line.css({
        left: $tabActive.position().left + "px",
        width: $tabActive.outerWidth() + "px"
      });
    });
  
    $tabs.on("click", function() {
      $(".tab-item.active").removeClass("active");
      $(".tab-pane.active").removeClass("active");
  
      $line.css({
        left: $(this).position().left + "px",
        width: $(this).outerWidth() + "px"
      });
  
      $(this).addClass("active");
      $panes.eq($(this).index()).addClass("active");
    });
  });