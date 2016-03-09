app.controller('LoginCtrl', function($scope, AuthFactory, $state){
  $scope.submitLogin = function(){
		AuthFactory.login($scope.user)
		.then(function(){
			$state.go('AdminState')
		})
		.then(function(){
			$scope.user = {};
		})
		.then(null, function(err){
			console.log(err)
		})
	}
});
