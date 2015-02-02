angular.module("notica")

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
      if (attrs.backgroundColor)
        scope.dialogStyle.backgroundColor = attrs.backgroundColor;
      if (attrs.borderColor)
        scope.dialogStyle.borderColor = attrs.borderColor;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: "modal/modalTemplate.html"
  };
})

;
