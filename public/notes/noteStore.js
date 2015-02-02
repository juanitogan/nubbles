angular.module("notica").factory("noteStore", [

"$http", "$window", function ($http, $window) {

    var notes = [];

    return {

        fetchNotes: function() {
            return notes;
        }

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
