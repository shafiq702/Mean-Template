app.controller('LoginCtrl', function($scope, AuthFactory){
  $scope.submitLogin = function(){
		AuthFactory.login($scope.user)
		.then(function(){
			$state.go('dashboard')
		})
		.then(function(){
			$scope.user = {};
		})
		.then(null, function(err){
			console.log(err)
		})
	}

});
