sap.ui.jsview("OpenUI5.view.App", {

   getControllerName: function() {
      return "OpenUI5.controller.App";
   },

   createContent: function(oController) {
      return new sap.m.App({
         pages: [
            new sap.m.SplitContainer({
               masterPages: [
                  new sap.m.Page({
                     title: "Desktop",
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
                  })
               ],
               detailPages: [
                  new sap.m.Page({
                     title: "Tasks",
                     headerContent: [],
                     content: [
                        new sap.m.Panel({
                           content: [
                              new sap.ui.view({
                                 type: sap.ui.core.mvc.ViewType.JS,
                                 viewName: "OpenUI5.view.TasksTable"
                              })
                           ]
                        })
                     ]
                  })
               ]
            })
         ]
      });
   }
});
