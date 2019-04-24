$("article").click(function(e) {
  $(this)
    .children()
    .children(".content")
    .slideToggle();
  $(this)
    .children()
    .children("h2")
    .children("i")
    .toggleClass("fa-chevron-down")
    .toggleClass("fa-chevron-right");
});
