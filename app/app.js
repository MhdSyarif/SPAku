var app = angular.module("myApp", []);

app .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'view/home.html',
        controller: 'HomeController'
      }).
      when('/about', {
        templateUrl: 'view/about.html',
        controller: 'AboutController'
      }).
      when('/gallery', {
        templateUrl: 'view/gallery.html',
        controller: 'GalleryController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);


//myCarousel the slid and slide events
var mainSlider = document.getElementById('myCarousel');
	mainSlider.addEventListener('slid.bs.carousel', function(e) {
		var active = mainSlider.querySelector('.item.active .carousel-caption');
		if (active.classList) { active.classList.remove('slide') } else { active.className = active.className.replace(' slide','') }
});
	mainSlider.addEventListener('slide.bs.carousel', function(e) {
		var active = mainSlider.querySelector('.item.active .carousel-caption');
		if (active.classList) { active.classList.add('slide') } else { active.className += ' slide'; }
});