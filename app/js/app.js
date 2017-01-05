var myApp = angular.module('myApp', ['ui.router','controllers']);
myApp.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
    .state('discover', {
      url: "/discover",
      controller:"discoverCtrl",
      templateUrl: "partials/discover.html"
    })
      .state('toplist', {
        url: "/toplist",
        controller:"toplistCtrl",
        templateUrl: "partials/toplist.html"
      })
      .state('playlist', {
        url: "/playlist",
        controller:"playlistCtrl",
        templateUrl: "partials/playlist.html"
      })
      .state('djradio', {
        url: "/djradio",
        controller:"djradioCtrl",
        templateUrl: "partials/djradio.html"
      })
      .state('artist', {
        url: "/artist",
        controller:"artistCtrl",
        templateUrl: "partials/artist.html"
      })
    .state('album', {
      url: "/album",
      controller:"albumCtrl",
      templateUrl: "partials/album.html"
    })
	 $urlRouterProvider.otherwise("/discover");
});