"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var platform = require("platform");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var core_2 = require("./core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_floatingactionbutton_1 = require("nativescript-floatingactionbutton");
nativescript_angular_1.registerElement('Fab', function () { return nativescript_floatingactionbutton_1.Fab; });
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent,
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                core_2.CoreModule,
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            providers: [
                { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader },
                { provide: 'platform', useValue: platform },
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA,
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FDaUQ7QUFDakQsZ0ZBQThFO0FBQzlFLHNEQUFvRTtBQUNwRSxtQ0FBcUM7QUFFckMsMkRBQXdEO0FBQ3hELGlEQUErQztBQUMvQywrQkFBb0M7QUFFcEMsNkRBQXVEO0FBQ3ZELHVGQUF3RDtBQUV4RCxzQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsdUNBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztBQXNCbEM7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXBCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLGlCQUFVO2FBQ1g7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7YUFDYjtZQUNELFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSw0QkFBcUIsRUFBRSxRQUFRLEVBQUUsOEJBQXFCLEVBQUU7Z0JBQ25FLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO2FBQzVDO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLFxuICAgICAgICAgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSAncGxhdGZvcm0nO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL2NvcmUnO1xuXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBGYWIgfSBmcm9tICduYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b24nO1xuXG5yZWdpc3RlckVsZW1lbnQoJ0ZhYicsICgpID0+IEZhYik7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICBDb3JlTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBBcHBDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIHsgcHJvdmlkZTogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCB1c2VDbGFzczogTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0sXG4gICAgICB7IHByb3ZpZGU6ICdwbGF0Zm9ybScsIHVzZVZhbHVlOiBwbGF0Zm9ybSB9LFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=