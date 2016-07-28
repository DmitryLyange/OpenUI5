sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("OpenUI5.Component", {

      metadata : {
         rootView : {
            type : sap.ui.core.mvc.ViewType.JS,
            viewName : "OpenUI5.view.App"
         }
         // manifest : "json"
      },

      init : function () {
         UIComponent.prototype.init.apply(this, arguments);
      }
   });
});
