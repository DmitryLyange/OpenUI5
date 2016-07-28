sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";

   return Controller.extend("OpenUI5.controller.App", {

      onTest : function () {
         alert("Test");
      },
   });
});
