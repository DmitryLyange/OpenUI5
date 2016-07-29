jQuery.sap.require("sap.tnt.SideNavigation");

sap.ui.jsview("OpenUI5.view.SideNavigation", {

   getControllerName: function() {
      return "OpenUI5.controller.SideNavigation";
   },

   createContent: function(oController) {
      var oSideNavigationButton = new sap.m.Button({
         text: "Toggle Collapse/Expand",
         icon: "sap-icon://menu2",
         press: [oController.onTest, oController]
      });

      var oSideNavigation = new sap.tnt.SideNavigation("sideNavigation1", {
         item: [
            new sap.tnt.NavigationList({
               items: [
                  new sap.tnt.NavigationListItem({
                     text: "Tasks",
                     items: [
                        new sap.tnt.NavigationListItem({
                           text: "My active tasks"
                        }),
                        new sap.tnt.NavigationListItem({
                           text: "My completed tasks"
                        })
                     ]
                  })
               ]
            })
         ],
         fixedItem: [
            new sap.tnt.NavigationList({
               items: [
                  new sap.tnt.NavigationListItem({
                     text: "My lists"
                  }),
                  new sap.tnt.NavigationListItem({
                     text: "Shared lists"
                  })
               ]
            })
         ]
      });

      return [
         //oSideNavigationButton,
         oSideNavigation
      ]
   }
});
