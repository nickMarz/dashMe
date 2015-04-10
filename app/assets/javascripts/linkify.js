$(document).ready(function () {
  setInterval(function() {
    $('p').linkify();}, 500);
  setInterval(function() { console.log('linkify');
  }, 500);

$('p').linkify();
});
