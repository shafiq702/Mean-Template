app.config(function ($stateProvider) {
	$stateProvider.state('RegiserState', {
		url: '/register',
		templateUrl: 'app/js/register/register.html',
    controller: 'RegisterCtrl',
		data: {
			restricted: false
		}
	});
});
