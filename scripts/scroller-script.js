window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var video = document.getElementById('video');
    video.style.transform = 'translateY(' + scrolled * 0.4 + 'px)';
  });