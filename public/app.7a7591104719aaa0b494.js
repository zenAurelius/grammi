webpackJsonp([0],[function(e,i,n){"use strict";i.__esModule=!0;var t=n(1);n(3);var c=n(5),r=n(7),a=n(9),o=n(11);n(12);t.module("grammi",["ngRoute"]).component("gramMain",c.GramMain).component("gramHeader",r.GramHeader).component("gramAccueil",a.GramAccueil).config(o.default)},,,,,function(e,i,n){"use strict";i.__esModule=!0,i.GramMain={template:n(6)}},function(e,i){e.exports='<div id="main" class="table">\r\n    <div id="sidebar" class="cell">\r\n        MENU DU COTE\r\n    </div>\r\n    <div id="content" class="cell">\r\n        <div ng-view></div>\r\n    </div>\r\n</div>'},function(e,i,n){"use strict";i.__esModule=!0,i.GramHeader={template:n(8)}},function(e,i){e.exports='<div id="header">\r\n    ---GRAMMI---\r\n</div>'},function(e,i,n){"use strict";i.__esModule=!0;var t=function(){function e(e){this.placesService=e}return e.$inject=["placesService"],e.prototype.$onInit=function(){var e=this;this.placesService.getPlaces().then(function(i){console.log(i),e.places=i})},e}();i.GramAccueil={controller:t,template:n(10)}},function(e,i){e.exports="<h1>BONJOUR</h1>"},function(e,i){"use strict";function n(e,i){i.html5Mode(!0).hashPrefix("!"),e.when("/acceuil",{template:"<gram-accueil></gram-accueil>"}).when("/detail",{template:"<ox-wine-detail></ox-wine-detail>"}).otherwise({redirectTo:"/acceuil"})}n.$inject=["$routeProvider","$locationProvider"],i.__esModule=!0,i.default=n},function(e,i){}]);
//# sourceMappingURL=app.7a7591104719aaa0b494.js.map