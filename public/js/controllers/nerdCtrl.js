// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', ['NerdService']).controller('NerdController', function($scope, Nerd) {

    $scope.tagline = 'Nothing beats a pocket protector!';

    function getNerds() {
        Nerd.get().then(function(nerds) {
            $scope.nerds = nerds.data;
            return nerds.data;
        });
    }

    $scope.addNerd = function() {
        Nerd.create({name: $scope.nerdName});
        getNerds();
        $scope.nerdName = null;
    }

    getNerds();

});