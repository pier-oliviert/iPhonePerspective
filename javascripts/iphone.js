(function() {
  var rotateScene;

  $.domReady(function() {
    return document.addEventListener("mousemove", function() {
      return rotateScene(window.event);
    });
  });

  rotateScene = function(e) {
    var horizontal, vertical;
    horizontal = e.pageX / $(document).width();
    vertical = e.pageY / $(document).height();
    $('.iphone').css({
      '-webkit-transform': 'rotateX(' + (7 - (vertical * 14)) + 'deg) rotateY(' + (-10 + (horizontal * 20)) + 'deg)'
    });
    $('.specular').css({
      'background-position': (-200 + (horizontal * -500)) + 'px ' + (-vertical * 600) + 'px',
      'opacity': 1 - (horizontal * .45) - (vertical * .45)
    });
    $('.home-btn').css({
      'background': '-webkit-linear-gradient(-' + (80 - horizontal * 20) + 'deg, transparent 50%, rgba(255, 255, 255, .05) 50.1%, rgba(255, 255, 255, ' + (.4 - (horizontal * .1) - (vertical * .1)) + '))'
    });
    $('.iphone.white .home-btn').css({
      'background': '-webkit-linear-gradient(-' + (80 - horizontal * 20) + 'deg, rgba(0, 0, 0, ' + (.05 + (horizontal * .05) + (vertical * .05)) + '), rgba(0, 0, 0, 0) 50%, transparent 50.1%)',
      '-webkit-box-shadow': '0 0 1px rgba(0, 0, 0, .1)'
    });
    return $('.shadow').css({
      '-webkit-transform': 'rotateX(' + (65 + (vertical * 20)) + 'deg) rotateY(' + (10 - (horizontal * 20)) + 'deg) skewX(-5deg)'
    });
  };

}).call(this);
