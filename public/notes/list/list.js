////////////////////////////////////////////////////////////////////////////////
// Notes List directives.
//
angular.module("nubbles")

// Creates the <notes-list> element and template reference.
// Invokes the Notes List controller.
.directive("notesList", function() {
    return {
        restrict: "E"
    ,   controller: "listController"
    ,   controllerAs: "listCtl"
    ,   templateUrl: "notes/list/listTemplate.html"
    };
})

// Creates the <note> element and template reference.
// Typically acts as a child to <notes-list> and thus does not have it's
// own controller property.
.directive("note", function() {
    return {
        restrict: "E"
    ,   templateUrl: "notes/list/noteTemplate.html"
    };
})

;
