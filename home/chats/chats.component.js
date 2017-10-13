"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var core_2 = require("../../core");
var ChatsComponent = (function () {
    function ChatsComponent(chatsService, routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.chats = [];
        this.chats = chatsService.chats;
    }
    ChatsComponent.prototype.goToChat = function (args) {
        var extras = {
            queryParams: {
                unread: 2,
            },
        };
        this.routerExtensions.navigate([
            'chat',
            args.index,
        ], extras);
    };
    ChatsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-chats',
            templateUrl: './chats.component.html',
            styleUrls: ['./chats.component.css'],
        }),
        __metadata("design:paramtypes", [core_2.ChatsService,
            router_1.RouterExtensions])
    ], ChatsComponent);
    return ChatsComponent;
}());
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUErRDtBQUUvRCxtQ0FBMEM7QUFRMUM7SUFFRSx3QkFDRSxZQUEwQixFQUNsQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUg1QyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBS1QsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNYLElBQU0sTUFBTSxHQUFxQjtZQUMvQixXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLENBQUM7YUFDVjtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1lBQzdCLE1BQU07WUFDTixJQUFJLENBQUMsS0FBSztTQUNYLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDYixDQUFDO0lBbkJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBSWdCLG1CQUFZO1lBQ0EseUJBQWdCO09BSmpDLGNBQWMsQ0FvQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtY2hhdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0cy5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoYXRzQ29tcG9uZW50IHtcbiAgY2hhdHMgPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgY2hhdHNTZXJ2aWNlOiBDaGF0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICApIHtcbiAgICB0aGlzLmNoYXRzID0gY2hhdHNTZXJ2aWNlLmNoYXRzO1xuICB9XG5cbiAgZ29Ub0NoYXQoYXJncykge1xuICAgIGNvbnN0IGV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHVucmVhZDogMixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1xuICAgICAgJ2NoYXQnLFxuICAgICAgYXJncy5pbmRleCxcbiAgICBdLCBleHRyYXMpO1xuICB9XG59XG4iXX0=