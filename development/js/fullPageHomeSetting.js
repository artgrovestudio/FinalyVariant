$(document).ready(function() {
  $('#fullpage').fullpage({
    //anchors:['', 'secondPage', 'thirdPage', 'fourPage'],
    sectionsColor : ['#ccc', '#000', '#555', '#212121']
  });
  $('.scrool-down').click(function () {
    $.fn.fullpage.moveSectionDown();
  });
  $('.btn-projects').click(function () {
    $.fn.fullpage.moveSectionDown();
  });
});