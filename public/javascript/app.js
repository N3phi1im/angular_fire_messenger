 var app = angular.module("app", ["firebase"]);

 app.controller("messageController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://heat-1338.firebaseio.com/");
    $scope.messages = $firebaseArray(ref);
    $scope.addMessage = function(e) {
      if (e.keyCode === 13 && $scope.msg) {
        var name = $scope.name || "anonymous";
        $scope.messages.$add({
          from: name,
          body: $scope.msg
        });
        $scope.msg = "";
      }
    }
  }
  ]);