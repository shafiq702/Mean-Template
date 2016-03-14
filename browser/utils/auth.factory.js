app.factory('AuthFactory', function($http, $cacheFactory) {

  function extractData(res){
    return res.data.status
  }

  var currentUser;

  var setCurrentUser = function(user){
    if(user){
      currentUser = true;
    }else{
      currentUser = false;
    }
    return currentUser
  }

  return {
    login: function(username, password){
      return $http.post('/auth/login', {username: username, password: password})
      .then(extractData)
      .then(setCurrentUser)
    },
    register: function(username, password){
      return $http.post('/auth/register', {username: username, password: password})
      .then(extractData)
      .then(setCurrentUser)
    },
    isLoggedIn: function() {
      return currentUser
    },
    getUserStatus: function(){
      return $http.get('/auth/status')
      .then(extractData)
      .then(setCurrentUser)
    },
    logout: function(){
      return $http.get('/auth/logout')
      .then(extractData)
      .then(setCurrentUser)
    }
  }
})
