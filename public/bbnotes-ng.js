angular.module("notica", [])

    // Initialize the local storage.
    .run(function(noteStore) {
        noteStore.getNotes();
    })

;
