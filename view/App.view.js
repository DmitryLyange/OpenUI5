jQuery.sap.require("sap.ui.layout.Splitter");

sap.ui.jsview("OpenUI5.view.App", {

   getControllerName: function() {
      return "OpenUI5.controller.App";
   },

   createContent: function(oController) {
      var toolbar = new sap.m.Page("toolbarPage", {
         title: "Toolbar",
         content: [
            new sap.m.Panel({
               content: [
                  new sap.ui.view({
                     type: sap.ui.core.mvc.ViewType.JS,
                     viewName: "OpenUI5.view.Toolbar"
                  })
               ]
            })
         ]
      });

      var menu = new sap.m.Page("menuPage", {
         title: "Menu",
         headerContent: [],
         content: [
            new sap.m.Panel({
               content: [
                  new sap.ui.view({
                     type: sap.ui.core.mvc.ViewType.JS,
                     viewName: "OpenUI5.view.SideNavigation"
                  })
               ]
            })
         ]
      });

      var table = new sap.m.Page("tablePage", {
         title: "Table",
         headerContent: [],
         content: [
            new sap.m.Panel({
               content: [
                  new sap.ui.view({
                     type: sap.ui.core.mvc.ViewType.JS,
                     viewName: "OpenUI5.view.TasksTable"
                  })
               ]
            }),
         ]
      });

      var form = new sap.m.Page("formPage", {
         title: "Form",
         headerContent: [],
         content: [
            new sap.m.Panel({
               content: [
                  new sap.ui.view({
                     type: sap.ui.core.mvc.ViewType.JS,
                     viewName: "OpenUI5.view.Form"
                  })
               ]
            }),
         ]
      });


      var splitterHorizontal = new sap.ui.layout.Splitter("splitterHorizontal", {
         contentAreas: [
            table,
            form
         ]
      });

      var splitContainer = new sap.m.SplitContainer("splitContainer", {
         masterPages: [
            menu
         ],
         detailPages: [
            splitterHorizontal
         ]
      });

      var splitterVertical = new sap.ui.layout.Splitter("splitterVertical", {
         orientation: sap.ui.core.Orientation.Vertical,
         contentAreas: [
            toolbar,
            splitContainer
         ]
      });

      return application = new sap.m.App("application", {
         pages: [
            splitterVertical
         ]
      });
   }
});
