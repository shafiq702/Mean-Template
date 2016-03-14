app.config(function ($stateProvider) {
	$stateProvider.state('RegisterState', {
		url: '/register',
		templateUrl: 'app/js/register/register.html',
    controller: 'RegisterCtrl',
		data: {
			restricted: false
		}
	});
});
