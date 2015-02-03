////////////////////////////////////////////////////////////////////////////////
// Notes datastore service.
//
angular.module("nubbles").factory("noteStore", [

"$http", "$window", function ($http, $window) {

    // Store the notes array internally so that we don't have to wait for
    // the ajax GET all the time.
    var notes = [];

    return {

        // Public function that exposes the notes array.
        fetchNotes: function() {
            return notes;
        }

        // Get all notes from the server.
    ,   getNotes: function() {
            var req = {
                method: "GET"
            ,   url:   "/notes"
            };
            $http(req)
                .success(function(data, status, headers, config) {
                    notes = data;
                })
                .error(function(data, status, headers, config) {
                    $window.alert(data);
                })
            ;
        }

        // Add a new note to the server and then update the local store on success.
    ,   addNote: function(obj) {
            var req = {
                method: "POST"
            ,   url:    "/notes"
            ,   data:   obj
            };
            $http(req)
                .success(function(data, status, headers, config) {
                    notes.push(data);
                })
                .error(function(data, status, headers, config) {
                    $window.alert(data);
                })
            ;
        }

        // Update a note on the server and then update the local store on success.
    ,   updateNote: function(obj) {
            var req = {
                method: "PUT"
            ,   url:    "/notes/" + obj._id
            ,   data:   obj
            };
            $http(req)
                .success(function(data, status, headers, config) {
                    //$window.alert("Note saved!");
                    notes.some(function (note) {
                        if (note._id == data._id) {
                            note.title = data.title;
                            note.text = data.text;
                            return true;
                        }
                    });
                })
                .error(function(data, status, headers, config) {
                    $window.alert(data);
                })
            ;
        }

        // Delete a note from the server and then update the local store on success.
    ,   deleteNote: function(obj) {
            var req = {
                method: "DELETE"
            ,   url:    "/notes/" + obj._id
            };
            $http(req)
                .success(function(data, status, headers, config) {
                    notes = notes.filter(function(note) {
                        return note._id !== data._id;
                    });
                })
                .error(function(data, status, headers, config) {
                    $window.alert(data);
                })
            ;
        }

    };
}
]);
