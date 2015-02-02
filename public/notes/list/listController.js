angular.module("notica").controller("listController", [

"$scope", "noteStore", function($scope, noteStore) {

    var listCtl = this;

    listCtl.fetchNotes = function() {
        return noteStore.fetchNotes();
    };

    listCtl.editNote = function(obj) {
        // Broadcast a message to child controllers.
        // Allows edit to control to receive the message and trigger the edit.
        $scope.$broadcast("editMePlease", obj);
    };

    listCtl.deleteNote = function(obj) {
        noteStore.deleteNote(obj);
    };

}
]);
