System.register(['angular2/platform/browser', './app.component', 'rxjs/Rx'], function(exports_1) {
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent)
                .then(function (success) { return console.log('Success'); })
                .catch(function (error) { return console.warn(error); });
        }
    }
});
//# sourceMappingURL=main.js.map