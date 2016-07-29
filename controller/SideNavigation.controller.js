sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";

   return Controller.extend("OpenUI5.controller.SideNavigation", {

      onInit: function () {},

      onCollapseExpandPress: function (event) {
         var navigationList = this.getView().byId('sideNavigation');
         var expanded = !navigationList.getExpanded();

         navigationList.setExpanded(expanded);
      }
   });
});
