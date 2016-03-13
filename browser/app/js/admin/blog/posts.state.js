app.config(function ($stateProvider) {
	$stateProvider.state('AdminPosts', {
            url: '/admin/posts',
            templateUrl: 'app/js/admin/blog/posts.html',
            controller: 'PostsCtrl',
						data: {
							restricted: true
						},
						resolve: {
							allPosts: function(BlogFactory){
								return BlogFactory.findAllPosts()
								.then(function(allPosts){
									return allPosts
								})
							}
						}
        })
});
