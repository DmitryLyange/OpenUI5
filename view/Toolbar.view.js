jQuery.sap.require("sap.tnt.ToolHeader");

sap.ui.jsview("OpenUI5.view.Toolbar", {

   getControllerName: function() {
      return "OpenUI5.controller.Toolbar";
   },

   createContent: function(oController) {
      var oToolbar = new sap.tnt.ToolHeader({
         design: sap.m.ToolbarDesign.Auto,
         content: [
            new sap.m.ToolbarSpacer({
               width: "54rem"
            }),
            new sap.m.Button("tasksButton", {
               tooltip: "Tasks",
               icon: "sap-icon://task",
               press: [oController.onPress, oController],
            }),
            new sap.m.Button("addButton", {
               text: "",
               tooltip: "Add task",
               icon: "sap-icon://add",
               press: [oController.onPress, oController]
            }),
            new sap.m.Button("deleteButton", {
               text: "",
               tooltip: "Delete task",
               icon: "sap-icon://delete",
               press: [oController.onPress, oController]
            })
         ]
      });

      return [
         oToolbar
      ];
   }
});
