app.config(function ($stateProvider) {
	$stateProvider.state('LoginState', {
		url: '/login',
		templateUrl: 'app/js/login/login.html',
    controller: 'LoginCtrl',
		data: {
			restricted: false
		}
	});
});
