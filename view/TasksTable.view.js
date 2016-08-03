jQuery.sap.require("sap.ui.table.Table");
jQuery.sap.require("sap.m.ListBase");

sap.ui.jsview("OpenUI5.view.TasksTable", {

   getControllerName: function() {
      return "OpenUI5.controller.TasksTable";
   },

   createContent: function(oController) {
      var oTable = new sap.ui.table.Table("oTable", {
         selectionMode: sap.ui.table.SelectionMode.Single,
         selectionBehavior: sap.ui.table.SelectionBehavior.Row,
         rowSelectionChange: [oController.onRowSelectionChange, oController]
      });

      oTable.addColumn(new sap.ui.table.Column({
         label: new sap.m.Label({text: "LongText"}),
         template: new sap.m.Text({text: "{Title}"})
      }));
      oTable.addColumn(new sap.ui.table.Column({
         label: new sap.m.Label({text: "Text"}),
         template: new sap.m.Text({text: "{Priority}"})
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

      var changeButton = new sap.m.Button({
         text: "Change 'Text' value",
         icon: "sap-icon://menu2",
         press: [oController.onChangeButton, oController]
      });

      var longTextInput = new sap.m.Input("longTextInput", {
         value: ""
      });

      var oForm = new sap.m.Panel({
         content: [
            changeButton,
            longTextInput,
         ]
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
