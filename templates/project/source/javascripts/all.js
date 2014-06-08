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

/* IE8 */
$(document).ready(function() {
  $(".p1 .box:last-child").css({ marginRight: "0px" });
  $(".p2 .box:nth-child(5n)").css({ marginRight: "0px" });
  $(".p3 .box:nth-child(5n)").css({ marginRight: "0px" });
  $(".p5 .box:nth-child(5n)").css({ marginRight: "0px" });
  $(".p4 .right-col").css({ marginRight: "0px" });
  $(".p4 .box:nth-child(4n)").css({ marginRight: "0px" });
  $(".p6 .right-col").css({ marginRight: "0px" });
  $(".p7 .right-col").css({ marginRight: "0px" });
  $(".p8 .right-col").css({ marginRight: "0px" });
  $(".tab_head li:last-child").css({ marginRight: "0px" });
});

