sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("OpenUI5.controller.SideNavigation", {

      onInit: function () {},

      onTest : function () {
         alert("Test");
      },

      onCollapseExapandPress: function (event) {
         var navigationList = this.getView().byId('navigationList');
         var expanded = !navigationList.getExpanded();

         navigationList.setExpanded(expanded);
      }
   });
});
