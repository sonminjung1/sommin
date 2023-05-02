const path = anime.path('svg path');

anime({
  targets: '#circle',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 14000,
  loop: true
});