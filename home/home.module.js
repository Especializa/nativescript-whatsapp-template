"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var chats_component_1 = require("./chats/chats.component");
var short_when_pipe_1 = require("./chats/short-when.pipe");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var tabs_component_1 = require("./tabs/tabs.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                home_routing_module_1.HomeRoutingModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    mdi: 'material-design-icons.css',
                }),
            ],
            declarations: [
                home_component_1.HomeComponent,
                tabs_component_1.TabsComponent,
                chats_component_1.ChatsComponent,
                short_when_pipe_1.ShortWhenPipe,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA,
            ],
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLHVFQUE4RDtBQUU5RCwyREFBeUQ7QUFDekQsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCxtREFBaUQ7QUFDakQsd0RBQXNEO0FBcUJ0RDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBbkJ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLHVDQUFpQjtnQkFDakIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN4QixHQUFHLEVBQUUsMkJBQTJCO2lCQUNqQyxDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsK0JBQWE7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7YUFDakI7U0FDRixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuXG5pbXBvcnQgeyBDaGF0c0NvbXBvbmVudCB9IGZyb20gJy4vY2hhdHMvY2hhdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFNob3J0V2hlblBpcGUgfSBmcm9tICcuL2NoYXRzL3Nob3J0LXdoZW4ucGlwZSc7XG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzL3RhYnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgIG1kaTogJ21hdGVyaWFsLWRlc2lnbi1pY29ucy5jc3MnLFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIFRhYnNDb21wb25lbnQsXG4gICAgQ2hhdHNDb21wb25lbnQsXG4gICAgU2hvcnRXaGVuUGlwZSxcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUEsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXX0=