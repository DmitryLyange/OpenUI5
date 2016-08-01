sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
   "use strict";

   return Controller.extend("OpenUI5.controller.TasksTable", {

      onInit: function () {
         var oData = [{
            "Title": "Test1",
            "Priority": "21",
            "CheckBox": true
         },
         {
            "Title": "Test1",
            "Priority": "4",
            "CheckBox": true
         },
         {
            "Title": "Test1",
            "Priority": "3",
            "CheckBox": false
         },
         {
            "Title": "Test1",
            "Priority": "2",
            "CheckBox": false
         },
         {
            "Title": "Test1",
            "Priority": "1",
            "CheckBox": true
         }];

        //  var oModel = new JSONModel();
        //  oModel.loadData("model/TasksData.json");

         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      }
   });
});
