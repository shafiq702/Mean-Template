app.factory('AuthFactory', function($http) {

  var user = null;

  return {
    isLoggedIn: function() {
      if (user) {
        return true;
      } else {
        return false;
      }
    },
    getUserStatus: function() {
      return $http.get('/auth/status')
        // handle success
        .then(function(data) {
          console.log('factory ',data.data.status)
          if (data.data.status) {
            user = true;
          } else {
            user = false;
          }
        })
        // handle error
        .catch(function(data) {
          user = false;
          return user
        });
    },
    login: function(username, password) {
      return $http.post('/auth/login', {
          username: username,
          password: password
        })
        .then(function(data) {
          if (data.status === 200) {
            user = true;
            return data.data
          } else {
            user = false;
            throw new Error('testing this out')
          }
        })
        .catch(function(error) {
          user = false;
          return error
        })
    },
    logout: function() {
      return $http.get('/auth/logout')
        .then(function(data) {
          user = false;
          return user
        })
        .catch(function(err) {
          user = false;
          return err
        })
    },
    register: function(username, password) {
      return $http.post('/auth/register', {
          username: username,
          password: password
        })
        .then(function(data) {
          if (data.status === 200) {
            user = true;
            return data.data
          } else {
            user = false;
            throw new Error()
          }
        })
        .catch(function(error) {
          user = false;
          return error
        })
    }
  }
})
