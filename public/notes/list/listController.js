////////////////////////////////////////////////////////////////////////////////
// Notes List controller.
//
angular.module("nubbles").controller("listController", [

"$scope", "noteStore", function($scope, noteStore) {

    var listCtl = this;

    // Wrapper function that exposes the notes array from the Note Store service.
    listCtl.fetchNotes = function() {
        return noteStore.fetchNotes();
    };

    // Open the note editor for the given note object.
    listCtl.editNote = function(obj) {
        // Broadcast a message to child controllers.
        // Allows the Edit Controller to receive the message and trigger the edit.
        $scope.$broadcast("editMePlease", obj);
    };

    // Delete the given note object.
    listCtl.deleteNote = function(obj) {
        noteStore.deleteNote(obj);
    };

}
]);
