app.factory('AuthFactory',function($http){

var currentUser;

function extractData(res){
		currentUser = res.data;
		return res.data;
	}

	var setCurrentUser = function(user){
		currentUser = user;
		return currentUser
	}

	return {
		login: function(creds){
			return $http.post('/admin/login', creds)
			.then(extractData)
			.then(setCurrentUser)
		}
  }
})
