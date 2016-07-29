sap.ui.jsview("OpenUI5.view.TasksTable", {

   getControllerName: function() {
      return "OpenUI5.controller.TasksTable";
   },

   createContent: function(oController) {
      var oTaskModel = new sap.ui.model.json.JSONModel();
      oTaskModel.loadData("./model/TasksData.json");
      sap.ui.getCore().setModel(oTaskModel, "tasksData");

      var oList = new sap.m.List({
         width: "auto"
      });

      oList.bindItems({
         path : "tasksData",
         sorter : new sap.ui.model.Sorter("title"),
         template : new sap.m.StandardListItem({
            title: "{Title}",
            description: "{Priority}",
            type: sap.m.ListType.Navigation
         })
      });

      return [
         oList
      ]
   }
});
