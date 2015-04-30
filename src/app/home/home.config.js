'use strict';

angular.module('ngDevstack.home')

.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: 'home/home.tpl.html',
        data: {
            pageTitle: 'Home'
        }
    });
});
