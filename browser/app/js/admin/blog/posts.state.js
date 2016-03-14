app.config(function($stateProvider) {
	//View all posts
  $stateProvider.state('AdminPosts', {
      url: '/admin/posts',
      templateUrl: 'app/js/admin/blog/posts.html',
      controller: 'PostsCtrl',
      data: {
        restricted: true
      },
      resolve: {
        allPosts: function(BlogFactory) {
          return BlogFactory.findAllPosts()
            .then(function(allPosts) {
              console.log(allPosts)
              return allPosts
            })
        }
      }
    })
		//Create new Post
    .state('CreateState', {
      url: '/admin/posts/create',
      templateUrl: 'app/js/admin/blog/create.html',
      controller: 'CreateCtrl',
      data: {
        restricted: true
      }
    })
});
