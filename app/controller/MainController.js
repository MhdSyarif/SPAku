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
  
  
}]);

app.controller('HomeController', function($scope) {
  
});

app.controller('AboutController', function($scope) {

});

app.controller('GalleryController', function($scope) {

});