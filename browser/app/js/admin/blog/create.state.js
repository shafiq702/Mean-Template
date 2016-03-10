app.config(function ($stateProvider) {
	$stateProvider.state('CreateState', {
            url: '/admin/posts/create',
            templateUrl: 'app/js/admin/blog/create.html',
            controller: 'CreateCtrl'
        })
});
