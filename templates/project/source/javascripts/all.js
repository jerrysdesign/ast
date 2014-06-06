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