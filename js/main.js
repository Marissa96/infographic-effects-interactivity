var $leaf = $('.leaf');
var $canada = $('.big-canada');
var $walleye = $('.walleye');
var $wormGraph = $('.worm-graph');
var $bigCanada = $('.big-canada');

$leaf.on('click', function () {
  $('.leaf').toggleClass('slide');
});

$wormGraph.waypoint(function (direction) {
  $wormGraph.addClass('js-svg-animate');
}, {offset: 'bottom-in-view'});

$walleye.on('click', function () {
  $('.walleye').toggleClass('no-animate');
});

$bigCanada.on('click', function () {
  $bigCanada.toggleClass('fade-in');
});
