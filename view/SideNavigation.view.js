sap.ui.jsview("OpenUI5.view.SideNavigation", {

   getControllerName : function() {
      return "OpenUI5.controller.SideNavigation";
   },

   createContent : function(oController) {
      var oButton = new sap.m.Button({
          text: "Toggle Collapse/Exapand",
          icon: "sap-icon://menu2",
          press: [oController.onTest, oController]
      });

      return new sap.m.Page({
         title: "Title",
         content: [
            oButton
         ]
      });
   }
});


// sap.ui.define([
//    "sap/ui/core/mvc/JSView"
// ], function (JSView) {
//    "use strict";
//
//    return JSView.extend("sap.ui.test.view.SideNavigation", {
//
//      getControllerName : function() {
//        return "sap.ui.test.controller.SideNavigation";
//      },
//
//      createContent : function(oController) {
//        var oButton = new sap.m.Button({
//          text: "Toggle Collapse/Exapand",
//          icon: "sap-icon://menu2",
//          press: [oController.onTest, oController]
//        });
//
//        return new sap.m.Page({
//          title: "Title",
//          content: [
//            oButton
//          ]
//        });
//      }
//    });
// });
