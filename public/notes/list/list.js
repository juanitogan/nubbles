angular.module("notica")

.directive("notesList", function() {
    return {
        restrict: "E"
    ,   controller: "listController"
    ,   controllerAs: "listCtl"
    ,   templateUrl: "notes/list/listTemplate.html"
    };
})

.directive("note", function() {
    return {
        restrict: "E"
    ,   templateUrl: "notes/list/noteTemplate.html"
    };
})

;
