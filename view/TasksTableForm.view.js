sap.ui.jsview("OpenUI5.view.TasksTableForm", {

   getControllerName: function() {
      return "OpenUI5.controller.TasksTableForm";
   },

   createContent: function(oController) {
      var oTable = new sap.ui.view({
         type: sap.ui.core.mvc.ViewType.JS,
         viewName: "OpenUI5.view.TasksTable"
      });

      var oForm = new sap.ui.view({
         type: sap.ui.core.mvc.ViewType.JS,
         viewName: "OpenUI5.view.Form"
      });

      var oSplitterHorizontal = new sap.ui.layout.Splitter("splitterHorizontal", {
         contentAreas: [
            oTable,
            oForm
         ]
      });

      return [
         oSplitterHorizontal
      ];
   }
});
