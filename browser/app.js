var app = angular.module('main', ['ui.router', 'textAngular']);

app.config(function($urlRouterProvider, $locationProvider){
	// This turns off hashbang urls (/#about) and changes it to something normal (/about)
	// $locationProvider.html5Mode(true);
	// If we go to a URL that ui-router doesn't have registered, go to the "/" url.
  $urlRouterProvider.otherwise('/');
})

app.run(function ($rootScope, $state, AuthFactory) {
  $rootScope.$on('$stateChangeStart', function (event, next, current) {
    // AuthFactory.getUserStatus().then(function(data){console.log(data)})
    AuthFactory.getUserStatus()
    .then(function(){
      if (next.data.restricted && !AuthFactory.isLoggedIn()) {
        event.preventDefault()
        $state.go('LoginState');
      }
    })



  });
});
