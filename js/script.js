angular.module("starter.controllers", [])
    .factory('Reservation', function () {
    //creating object "reservation" to save reservation data
    var reservation = {
        chIn: "",
        chOu: "",
        adult: "",
        child: "",
        name: "",
        sname: "",
        email: "",
        phone: "",
    };
    return reservation;
})
    .controller("ListRooms", function ($scope, $http, Reservation) {
    $http.get("js/rooms.json").success(function (data) {
        $scope.rooms = data;
    });
    //get data from reservation object to scope.book
    $scope.book = Reservation;
    //function which adds information about chosen room to the Reservation object
    $scope.setRoom = function (room) {
        Reservation.room = room;
    };
    //functions for collapsable
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

//# sourceMappingURL=script.js.map
