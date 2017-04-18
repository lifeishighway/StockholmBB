angular.module("starter.controllers", [])
    .factory('Reservation', function () {
        
    var reservation = {
        chIn: "",
        chOu: "",
        adult: "",
        child: "",
        name: "",
        sname: "",
        email: "",
        phone: "",
        roomID: ""
    };
    return reservation;
})
    .controller("ListRooms", function ($scope, $http, Reservation) {
    $http.get("js/rooms.json").success(function (data) {
        $scope.rooms = data;
    });
    $scope.book = Reservation;
    $scope.setRoom = function (room) {
        Reservation.room = room;
    };
    $scope.toggleGroup = function (item) {
        if ($scope.isGroupShown(item)) {
            $scope.shownGroup = null;
        }
        else {
            $scope.shownGroup = item;
        }
    };
    $scope.isGroupShown = function (item) {
        return $scope.shownGroup === item;
    };
})
    .controller('ReservationCtrl', function ($scope, $state, Reservation) {
    $scope.book = Reservation;
});

//# sourceMappingURL=controllers.js.map
