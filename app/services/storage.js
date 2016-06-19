function Article($scope, $http){
	$http({method: 'GET', url: 'article.json'}).success(function(data){
		$scope.posts = data; // response data 
	});
}

function Gallery($scope, $http){
	$http({method: 'GET', url: 'gallery.json'}).success(function(data){
		$scope.galleries = data; // response data 
	});
}

function Founder($scope, $http) {
 	$http.get('http://swapi.co/api/people/7/').success(function(data) {
     	$scope.founder = data;
  	});
}