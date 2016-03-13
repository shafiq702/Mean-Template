app.controller('LoginCtrl', function($scope, AuthFactory, $state) {

  $scope.submitLogin = function() {

    // initial values
    $scope.error = false;
    $scope.disabled = true;

    AuthFactory.login($scope.user.username, $scope.user.password)
      .then(function(data) {
          $state.go('AdminState')
          $scope.disabled = false;
          $scope.user = {};
      })
      .then(null, function(err) {
        $scope.error = true;
        $scope.errorMessage = "Invalid username and/or password";
        $scope.disabled = false;
        $scope.loginForm = {};
      })
  }
});
