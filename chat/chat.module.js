"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var chat_routing_module_1 = require("./chat-routing.module");
var chat_component_1 = require("./chat.component");
var message_box_component_1 = require("./message-box/message-box.component");
var messages_area_component_1 = require("./messages-area/messages-area.component");
var ChatModule = (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                chat_routing_module_1.ChatRoutingModule,
                nativescript_ng_shadow_1.NgShadowModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    mdi: 'material-design-icons.css',
                }),
            ],
            declarations: [
                chat_component_1.ChatComponent,
                messages_area_component_1.MessagesAreaComponent,
                message_box_component_1.MessageBoxComponent,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA,
            ],
        })
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLHVFQUE4RDtBQUU5RCxpRUFBd0Q7QUFDeEQsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCw2RUFBMEU7QUFDMUUsbUZBQWdGO0FBcUJoRjtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBbkJ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLHVDQUFpQjtnQkFDakIsdUNBQWM7Z0JBQ2QsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN4QixHQUFHLEVBQUUsMkJBQTJCO2lCQUNqQyxDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOEJBQWE7Z0JBQ2IsK0NBQXFCO2dCQUNyQiwyQ0FBbUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcblxuaW1wb3J0IHsgTmdTaGFkb3dNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmctc2hhZG93JztcbmltcG9ydCB7IENoYXRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jaGF0LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tICcuL2NoYXQuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VCb3hDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtYm94L21lc3NhZ2UtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlc0FyZWFDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2VzLWFyZWEvbWVzc2FnZXMtYXJlYS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIENoYXRSb3V0aW5nTW9kdWxlLFxuICAgIE5nU2hhZG93TW9kdWxlLFxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgbWRpOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcycsXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoYXRDb21wb25lbnQsXG4gICAgTWVzc2FnZXNBcmVhQ29tcG9uZW50LFxuICAgIE1lc3NhZ2VCb3hDb21wb25lbnQsXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0TW9kdWxlIHsgfVxuIl19