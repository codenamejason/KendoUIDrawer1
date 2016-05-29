'use strict';

app.productView = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.productView.set('title', 'Documanager 1.0');
})();
// END_CUSTOM_CODE_homeView
