app.directive('navbar', function(AuthFactory, $state){
	return {
		restrict: 'E',
		templateUrl: '/components/navbar/navbar.html',
		link: function(scope){
			scope.loggedIn = function(){
				return AuthFactory.isLoggedIn();
			};

			scope.logout = function(){
				return AuthFactory.logout()
				.then(function(){
					$state.go('LoginState')
				})
			}
		}
	}
})
