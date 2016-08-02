sap.ui.define([
   "sap/ui/core/mvc/Controller",
], function (Controller) {
   "use strict";

   return Controller.extend("OpenUI5.controller.Toolbar", {

      onInit: function () {},

      onPress: function(oEvent) {
         var oButton = oEvent.getSource();
         switch (oButton.getId()) {
            case "tasksButton":
               break;
            case "addButton":
               break;
            case "deleteButton":
               break;
            default:
               break;
         };
      }
   });
});
