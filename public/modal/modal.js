////////////////////////////////////////////////////////////////////////////////
// Modal Dialog directives.
//
// Taken and adapted from:
//   http://adamalbrecht.com/2013/12/12/creating-a-simple-modal-dialog-directive-in-angular-js/
//   http://stackoverflow.com/questions/25341798/how-do-i-add-a-reusable-modal-dialog-in-angular/25342580#25342580
//
angular.module("nubbles")

.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      // MJJ: begin mod
          if (attrs.backgroundColor)
            scope.dialogStyle.backgroundColor = attrs.backgroundColor;
          if (attrs.borderColor)
            scope.dialogStyle.borderColor = attrs.borderColor;
      // MJJ: end mod
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: "modal/modalTemplate.html"
  };
})

;
