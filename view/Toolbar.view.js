sap.ui.jsview("OpenUI5.view.Toolbar", {

   getControllerName: function() {
      return "OpenUI5.controller.Toolbar";
   },

   createContent: function(oController) {
     var oToolbar = new sap.m.Toolbar({
        active: true,
        content: [
           new sap.m.Label({
              text: "testToolbar1"
           }),
           new sap.m.Label({
              text: "testToolbar2"
           }),
           new sap.m.Label({
              text: "testToolbar3"
           })
        ]
     });

     return [
        oToolbar
     ];
   }
});
