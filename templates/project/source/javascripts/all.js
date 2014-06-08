/*首頁檢索 tab*/
$(document).ready(function() {
  $(".tab_content").hide();
  $(".tab_content:first").show();
  $(".tab_head li").click(function() {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
    $(".tab_head li").removeClass("active");
    $(this).addClass("active");
  });
});

/**/
$(document).ready(function() {
  $(".collapse").collapse({
    accordion: true,
    open: function() {
      this.addClass("open");
      this.css({ height: this.children().outerHeight() });
    },
    close: function() {
      this.css({ height: "0px" });
      this.removeClass("open");
    }
  });
});