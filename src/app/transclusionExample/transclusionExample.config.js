'use strict';

angular.module('ngDevstack.transclusionExample')

.config(function ($stateProvider) {
    $stateProvider.state('transclusionExample', {
        url: '/transclusionExample',
        views: {
            "main": {
                controller: 'TransclusionExampleCtrl as transclusionExample',
                templateUrl: 'transclusionExample/transclusionExample.tpl.html'
            }
        },
        data: {
            pageTitle: 'Transclusion Example'
        }
    });
});