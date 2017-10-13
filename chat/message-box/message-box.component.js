"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MessageBoxComponent = (function () {
    function MessageBoxComponent(platform) {
        this.platform = platform;
    }
    MessageBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-message-box',
            templateUrl: './message-box.component.html',
            styleUrls: ['./message-box.component.css'],
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());
exports.MessageBoxComponent = MessageBoxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZS1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBUXpEO0lBQ0UsNkJBQXVDLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO0lBQUcsQ0FBQztJQUR4QyxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQztRQUVhLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBOztPQURwQixtQkFBbUIsQ0FFL0I7SUFBRCwwQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICducy1tZXNzYWdlLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2UtYm94LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJveENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ3BsYXRmb3JtJykgcHVibGljIHBsYXRmb3JtKSB7fVxufVxuIl19