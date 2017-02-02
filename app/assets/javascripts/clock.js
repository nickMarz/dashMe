function setTime() {
  var time = new Date();
  var h = time.getHours();
  var am = false;
  if(h < 12) am = true;
  if(h > 12) h -= 12;
  var m = time.getMinutes();
  var s = time.getSeconds();
  var ms = time.getMilliseconds();

  setHand('#hour-container', ((h / 12) + (m / 720)) * 360);
  setHand('#minute-container', ((m / 60) + (s / 3600)) * 360);
  setHand('#second-container', ((s / 60) + (ms / 60000)) * 360);

  setText(h.toString(), m.toString(), am);
};

function setHand(hand, angle) {
  $(hand).css({
    'transform': 'rotate(' + angle + 'deg)',
    '-moz-transform': 'rotate(' + angle + 'deg)',
    '-o-transform': 'rotate(' + angle + 'deg)',
    '-webkit-transform': 'rotate(' + angle + 'deg)',
  });
};

function setText(h, m, am) {
  if(m.length == 1) m = '0' + m;

  $('#time').text(h + ':' + m);

  if (am) {$('#time').addClass('am')}
  if (!am) {$('#time').removeClass('am')}
};

$(function() {
  setInterval(function() { setTime() }, 10);
  setTime();
});