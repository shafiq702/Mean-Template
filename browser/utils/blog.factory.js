app.factory('BlogFactory',function($http, AuthFactory){
	var user = AuthFactory.currentUser();
	return {
		createPost: function(post){
			post.author = user.name
			return $http.post('/admin/post/create', post)
      .then(function(post){
        return post.data
      })
		},
		findAllPosts: function(){
			return $http.get('./admin/post')
			.then(function(allPosts){
				return allPosts.data
			})
		}
  }
})
