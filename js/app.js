/// <reference path="../typings/index.d.ts" />
// ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// "starter" is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of "requires"
// "starter.controllers" is found in controllers.js
angular.module("starter", ["ionic", "starter.controllers"])
    .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            window.StatusBar.styleLightContent();
        }
    });
})
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("tab", {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })
        .state("tab.about", {
        url: "/about",
        views: {
            "tab-about": {
                templateUrl: "templates/tab-about.html",
            }
        }
    })
        .state("tab.rooms", {
        url: "/rooms",
        views: {
            "tab-rooms": {
                templateUrl: "templates/tab-rooms.html",
                controller: "ListRooms as rooms"
            }
        }
    })
        .state("tab.book", {
        url: "/book",
        views: {
            "tab-book": {
                templateUrl: "templates/tab-book.html",
                controller: "ReservationCtrl"
            }
        }
    })
        .state("tab.book-list", {
        url: "/book/list",
        views: {
            "tab-book": {
                templateUrl: "templates/tab-booklist.html",
            }
        }
    })
        .state("tab.book-details", {
        url: "/book/details",
        views: {
            "tab-book": {
                templateUrl: "templates/tab-bookdetails.html",
                controller: "ReservationCtrl"
            }
        }
    })
        .state("tab.book-confirmation", {
        url: "/book/confirmation",
        views: {
            "tab-book": {
                templateUrl: "templates/tab-bookconfirmation.html",
                controller: "ReservationCtrl"
            }
        }
    })
        .state("tab.contact", {
        url: "/contact",
        views: {
            "tab-contact": {
                templateUrl: "templates/tab-contact.html",
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/tab/about");
});

//# sourceMappingURL=app.js.map
