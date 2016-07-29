sap.ui.jsview("OpenUI5.view.TasksTable", {

   getControllerName: function() {
      return "OpenUI5.controller.TasksTable";
   },

   createContent: function(oController) {
      var oTaskModel = new sap.ui.model.json.JSONModel();
      oTaskModel.loadData("./model/TasksData.json");
      sap.ui.getCore().setModel(oTaskModel, "tasksData");

      var oList = new sap.m.List({
         width: "auto",
         items: [
            new sap.m.ObjectListItem({
              title: "21"
            }),
            new sap.m.ObjectListItem({
              title: "22"
            })
         ]
      });

      var oList2 = new sap.m.List({

      });
      var oItemTemplate = new sap.m.ObjectListItem({title:"{name}"});
      oList2.bindItems("tasksData", oItemTemplate);
      //oList.bindAggregation("items", "/tasksData", new sap.ui.core.ListItem({text:"{Title}"}));

      // oList.bindItems({
      //    path : "tasksData",
      //    sorter : new sap.ui.model.Sorter("title"),
      //    template : new sap.m.StandardListItem({
      //       title: "{Title}",
      //       description: "{Priority}",
      //       type: sap.m.ListType.Navigation
      //    })
      // });

      return [
         oList,
         oList2
      ]
   }
});
