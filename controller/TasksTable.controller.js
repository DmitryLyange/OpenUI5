sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
   "use strict";

   return Controller.extend("OpenUI5.controller.TasksTable", {

      onInit: function () {
         var oData = [{
            "Title": "Test1",
            "Priority": "Text1",
            "CheckBox": true,
            "Quantity": 21,
            "ExtendedPrice": 87.2000,
            "Date": "2015-04-01T00:00:00"
         },
         {
            "Title": "Test1",
            "Priority": "Text2",
            "CheckBox": true,
            "Quantity": 4,
            "ExtendedPrice": 9.99999,
            "Date": "2015-02-18T00:00:00"
         },
         {
            "Title": "Test1",
            "Priority": "Text3",
            "CheckBox": false,
            "Quantity": 3,
            "ExtendedPrice": 6.85000,
            "Date": "2015-03-02T00:00:00"
         },
         {
            "Title": "Test1",
            "Priority": "Text4",
            "CheckBox": false,
            "Quantity": 2,
            "ExtendedPrice": 8.8000,
            "Date": "2015-04-12T00:00:00"
         },
         {
            "Title": "Test1",
            "Priority": "Test text5",
            "CheckBox": true,
            "Quantity": 1,
            "ExtendedPrice": 2.71212,
            "Date": "2015-01-27T00:00:00"
         }];

        //  var oModel = new JSONModel();
        //  oModel.loadData("model/TasksData.json");

         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      }
   });
});
