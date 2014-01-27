/**
 * Angular Thumbnail Navigation Component
 * @version v0.0.0 - 2013-12-09
 * @author Bobby Santiago <bobby@100yea.rs>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('ahundredyears.thumblist-nav', [])

angular.module('ahundredyears.thumblist-nav')

.directive('thumblistNav', [function() {

  var link = function(scope, element, attrs){

    var config = {
      showArrows: false
    };

    // TODO Use a promise
    setTimeout(function() {
      scope.pane = $('.thumblist-nav');
      scope.pane.jScrollPane(config);
    }, 200);
  };

  return {
    restrict: "E",
    link: link,
    template: "<div class='thumblist-nav horizontal-only' ng-transclude></div>",
    transclude: true,
    replace: true
  }

}]);
