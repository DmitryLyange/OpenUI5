jQuery.sap.require("sap.ui.table.Table");

sap.ui.jsview("OpenUI5.view.TasksTable", {

   getControllerName: function() {
      return "OpenUI5.controller.TasksTable";
   },

   createContent: function(oController) {
      var oTable = new sap.ui.table.Table("oTable", {
          selectionMode : sap.ui.table.SelectionMode.Single,
          selectionBehavior: sap.ui.table.SelectionBehavior.Row
      });

      oTable.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({text: "LongText"}),
        template: new sap.m.Text({text:"{Title}"})
      }));
      oTable.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({text: "Text"}),
        template: new sap.m.Input({value: "{Priority}"})
      }));
      oTable.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({text: "Boolean"}),
        template: new sap.m.CheckBox({checked: "{CheckBox}"})
      }));
      oTable.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({text: "Number"}),
        template: new sap.m.Text({text: "{Quantity}"})
      }));

      oTable.bindRows("/");

      return [
         oTable
      ]
   }
});
