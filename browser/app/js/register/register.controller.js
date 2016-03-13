app.controller('RegisterCtrl', function($scope, AuthFactory, $state) {

  $scope.register = function() {
    // initial values
    $scope.error = false;
    $scope.disabled = true;

    // call register from service
    AuthFactory.register($scope.registerForm.username, $scope.registerForm.password)
      // handle success
      .then(function() {
        $state.go('LoginState')
        $scope.disabled = false;
        $scope.registerForm = {};
      })
      // handle error
      .catch(function() {
        $scope.error = true;
        $scope.errorMessage = "Something went wrong!";
        $scope.disabled = false;
        $scope.registerForm = {};
      });
  };

});
