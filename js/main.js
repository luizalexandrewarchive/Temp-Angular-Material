(function(){

    var spa = angular.module('spa', ['iconesSVG','ngRoute']);

    spa.controller('SlidenavCtrl', function($scope, $timeout, $mdSidenav, $mdUtil, $log) {
        $scope.toggleLeft = buildToggler('left');
        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function() {
                $mdSidenav(navID)
                    .toggle()
            }, 300);
            return debounceFn;
        }
    });

    spa.controller('LeftSlidenavCtrl', function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
            $mdSidenav('left').close()
        };
    });

    spa.controller('MenuItemsCtrl', function($scope) {
                            //{name:'exemple', link:'http://exemple.com or #/exemple', icon:'assets-cache.js name'},
        $scope.MenuItems = [{name:'Início', link:'#/', icon:'ic_chevron_right_24px'},
                            {name:'Favoritos', link:'#/favorite', icon:'favorite'}]
    }); 

    spa.controller('SplashScreenCtrl', function($scope) {          
            setInterval(function () {
                document.getElementById("splashScreen").style.display = "none";
                document.getElementById("app").style.display = "block";
            }, 3000);
    }); 

    spa.config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'includes/home.html',
            controller: 'HomeCtrl'
        })

        .when('/favorite', {
            templateUrl: 'includes/favorite.html',
            controller: 'FavoriteCtrl'
        })

        .when('/configuration', {
            templateUrl: 'includes/configuration.html',
            controller: 'ConfigurationCtrl'
        })
        .otherwise({ redirectTo: '/'});
    });

    spa.controller('HomeCtrl', ['$scope', '$log', function($scope, $log){
        $scope.name = 'Início';
    }]);

    spa.controller('FavoriteCtrl', ['$scope', '$log', function($scope, $log){
        $scope.name = 'Favoritos';
    }]);

    spa.controller('ConfigurationCtrl', ['$scope', '$log', function($scope, $log){
        $scope.name = 'Configuração';
    }]);

})()

