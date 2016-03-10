app.config(function ($stateProvider) {
	$stateProvider.state('AdminPosts', {
            url: '/admin/posts',
            templateUrl: 'app/js/admin-dashboard/admin-posts.html',
            controller: 'PostsCtrl'
        })
});
