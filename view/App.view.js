jQuery.sap.require("sap.ui.layout.Splitter");

sap.ui.jsview("OpenUI5.view.App", {

   getControllerName: function() {
      return "OpenUI5.controller.App";
   },

   createContent: function(oController) {
      var oToolbar = new sap.m.Page("toolbar", {
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

      var oMenu = new sap.m.Page("menu", {
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

      var oTasksTableForm = new sap.m.Page("tasksTableForm", {
         title: "Table",
         headerContent: [],
         content: [
            new sap.m.Panel({
               content: [
                  new sap.ui.view({
                     type: sap.ui.core.mvc.ViewType.JS,
                     viewName: "OpenUI5.view.TasksTableForm"
                  })
               ]
            }),
         ]
      });

      var oSplitContainer = new sap.m.SplitContainer("splitContainer", {
         masterPages: [
            oMenu
         ],
         detailPages: [
            oTasksTableForm
         ]
      });

      var oSplitterVertical = new sap.ui.layout.Splitter("splitterVertical", {
         orientation: sap.ui.core.Orientation.Vertical,
         contentAreas: [
            oToolbar,
            oSplitContainer
         ]
      });

      return application = new sap.m.App("application", {
         pages: [
            oSplitterVertical
         ]
      });
   }
});
