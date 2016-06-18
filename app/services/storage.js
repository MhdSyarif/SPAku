function Article($scope, $http) {
  $http.get('http://localhost/learn/lumen-rest/public/api').success(function(data) {
    $scope.articles = data;
  });
}
