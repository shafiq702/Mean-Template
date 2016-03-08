app.config(function ($stateProvider) {
	$stateProvider.state('HomeState', {
		url: '/',
		templateUrl: 'app/home/home.html',
    controller: 'HomeCtrl'
	});
});
