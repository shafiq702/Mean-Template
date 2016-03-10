app.config(function ($stateProvider) {
	$stateProvider.state('AdminPosts', {
            url: '/admin/posts',
            templateUrl: 'app/js/admin/blog/posts.html',
            controller: 'PostsCtrl'
        })
});
