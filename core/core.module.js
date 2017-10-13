"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var chats_service_1 = require("./chats.service");
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
            ],
            declarations: [],
            providers: [
                chats_service_1.ChatsService,
            ],
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxnRkFBOEU7QUFFOUUsaURBQStDO0FBVy9DO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFUdEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjthQUNuQjtZQUNELFlBQVksRUFBRSxFQUFFO1lBQ2hCLFNBQVMsRUFBRTtnQkFDVCw0QkFBWTthQUNiO1NBQ0YsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcblxuaW1wb3J0IHsgQ2hhdHNTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0cy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ2hhdHNTZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHsgfVxuIl19