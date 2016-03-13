app.controller('CreateCtrl', function($scope, BlogFactory, $state){

  $scope.createPost = function(){
      BlogFactory.createPost($scope.htmlVariable)
      .then(function(){
        $state.go('AdminPosts')
      })
      .then(function(){
        $scope.htmlVariable = {};
      })
      .catch(function(err){
        console.log(err);
      })
  }

});
