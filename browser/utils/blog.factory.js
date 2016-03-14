app.factory('BlogFactory',function($http, AuthFactory){
	return {
		createPost: function(post){
			return $http.post('/blog/create', post)
      .then(function(post){
        return post.data
      })
		},
		findAllPosts: function(){
			return $http.get('/blog')
			.then(function(allPosts){
				return allPosts.data
			})
		}
  }
})
