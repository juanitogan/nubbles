angular.module("notica").controller("editController", [

"$scope", "noteStore", function($scope, noteStore) {

    var editCtl = this;

    //editCtl.formMode = "";
    editCtl.formModeAdd = "ADD";
    editCtl.formModeEdit = "EDIT";

    editCtl.newNote = function() {
        clearForm();
        editCtl.formMode = editCtl.formModeAdd;
    };

    // Receive broadcasted event from List Controller.
    $scope.$on("editMePlease", function(event, obj) {
        editCtl.note = angular.copy(obj);
        editCtl.formMode = editCtl.formModeEdit;
    });

    editCtl.mergeNote = function() {
        if (editCtl.formMode === editCtl.formModeAdd) {
            noteStore.addNote(editCtl.note);
        } else if (editCtl.formMode === editCtl.formModeEdit) {
            noteStore.updateNote(editCtl.note);
        } else {
            console.error("Unknown formMode in editCtl.mergeNote");
        }
        clearForm();
    };

    editCtl.cancelEdit = function() {
        clearForm();
    };

    function clearForm() {
        editCtl.formMode = "";
        editCtl.note = {};
    };

}
]);
