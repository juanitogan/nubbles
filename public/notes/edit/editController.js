////////////////////////////////////////////////////////////////////////////////
// Note Editor controller.
//
angular.module("nubbles").controller("editController", [

"$scope", "noteStore", function($scope, noteStore) {

    var editCtl = this;

    //editCtl.formMode = "";

    // "Constants" that define the modes the form operates in.
    editCtl.formModeAdd = "ADD";
    editCtl.formModeEdit = "EDIT";

    // Open the Note Editor in "add" mode for adding a new note.
    // Setting formMode to a value opens the form in that mode.
    editCtl.newNote = function() {
        clearForm();
        editCtl.formMode = editCtl.formModeAdd;
    };

    // Receive broadcasted event from List Controller.
    $scope.$on("editMePlease", function(event, obj) {
        // Make a deep copy of the obj to prevent direct edits in case
        // forgiveness is needed (ie: a cancel button).
        editCtl.note = angular.copy(obj);
        // Open the Note Editor in "edit" mode for updating a note.
        // Setting formMode to a value opens the form in that mode.
        editCtl.formMode = editCtl.formModeEdit;
    });

    // Insert/update "merge" the new edits to the data store.
    editCtl.mergeNote = function() {
        if (editCtl.formMode === editCtl.formModeAdd) {
            noteStore.addNote(editCtl.note);
        } else if (editCtl.formMode === editCtl.formModeEdit) {
            noteStore.updateNote(editCtl.note);
        } else {
            console.error("Unknown formMode in editCtl.mergeNote");
        }
        // Close the form.
        clearForm();
    };

    // Cancel the edits and close the form.
    editCtl.cancelEdit = function() {
        clearForm();
    };

    // Clear all objects and properties.
    function clearForm() {
        editCtl.formMode = "";
        editCtl.note = {};
    };

}
]);
