app.controller('MainController', ['$scope', function($scope) { 
  $scope.title  = 'SPAku';
  $scope.title1 = 'WELCOME To SPAku';
  $scope.span   =  'SPAku features a highly trained group of certified massage therapists who are dedicated to helping clients improve their health and achieve a balanced lifestyle';
  $scope.img1   = 'assets/img/slider-1.jpg';
  $scope.title2 = 'BEAUTY';
  $scope.img2   =  'assets/img/slider-2.jpg';
  $scope.title3 =  'RELAXY';
  $scope.img3   =  'assets/img/slider-4.jpg';

  $scope.contents = [
    {
      title: 'Spirit',
      description: 'Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      class: 'language-markup'
    },
    {
      title: 'Passion',
      description: 'Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      class: 'language-markup'
    }
  ];
  
  $scope.gallery = [
  	{ 
      item: 'item active', 
    	name: 'Welcome To SPA', 
    	price: 19, 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: 'images/slider-1.jpg',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	item: 'item',
      name: 'BEAUTY', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'images/slider-2.jpg',
    	likes: 0,
    	dislikes: 0
  	}, 
  	{ 
    	item: 'item',
      name: 'Harry Potter & The Prisoner of Azkaban', 
    	price: 11.99, 
    	pubdate: new Date('1999', '07', '08'), 
    	cover: 'images/slider-4.jpg',
    	likes: 0,
    	dislikes: 0 
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
}]);

app.controller('HomeController', function($scope) {
  
});

app.controller('AboutController', function($scope) {

});

app.controller('GalleryController', function($scope) {

});