////////////////////////////////////////////////////////////////////////////////
// Note Editor directives.
//
angular.module("nubbles")

// Creates the <note-editor> element and template reference.
// Invokes the Note Editor controller.
.directive("noteEditor", function() {
    return {
        restrict: "E"
    ,   controller: "editController"
    ,   controllerAs: "editCtl"
    ,   templateUrl: "notes/edit/editTemplate.html"
    };
})

;
