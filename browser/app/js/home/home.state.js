app.config(function ($stateProvider) {
	$stateProvider.state('HomeState', {
		url: '/',
		templateUrl: 'app/js/home/home.html',
    controller: 'HomeCtrl'
	});
});
