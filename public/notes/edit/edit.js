angular.module("notica")

.directive("noteEditor", function() {
    return {
        restrict: "E"
    ,   controller: "editController"
    ,   controllerAs: "editCtl"
    ,   templateUrl: "notes/edit/editTemplate.html"
    };
})

;
