app.config(function ($stateProvider) {
	$stateProvider.state('AdminState', {
		url: '/admin',
		templateUrl: 'app/js/admin-dashboard/admin-dashboard.html',
    controller: 'AdminCtrl'
	})
});
