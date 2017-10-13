"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var core_2 = require("../core");
var ChatComponent = (function () {
    function ChatComponent(route, chatsService, router, platform) {
        this.route = route;
        this.chatsService = chatsService;
        this.router = router;
        this.platform = platform;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.chatIndex = +params.index;
            _this.chat = _this.chatsService.chats[_this.chatIndex];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.unread = +params.unread;
        });
        this.getMessages();
    };
    ChatComponent.prototype.getMessages = function () {
        this.messages = this.chatsService.getMessages(this.chat);
    };
    ChatComponent.prototype.goBack = function () {
        this.router.back();
    };
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __param(3, core_1.Inject('platform')),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            core_2.ChatsService,
            router_2.RouterExtensions, Object])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUMrQztBQUMvQywwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELGdDQUE2QztBQVU3QztJQU1FLHVCQUNVLEtBQXFCLEVBQ3JCLFlBQTBCLEVBQzFCLE1BQXdCLEVBQ0wsUUFBUTtRQUgzQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUNMLGFBQVEsR0FBUixRQUFRLENBQUE7SUFFckMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDL0IsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ3RDLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUEvQlUsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztRQVdHLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO3lDQUhKLHVCQUFjO1lBQ1AsbUJBQVk7WUFDbEIseUJBQWdCO09BVHZCLGFBQWEsQ0FnQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsXG4gICAgICAgICBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENoYXQsIENoYXRzU2VydmljZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuLi9jb3JlL21vZGVscy9tZXNzYWdlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtY2hhdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2hhdEluZGV4OiBudW1iZXI7XG4gIGNoYXQ6IENoYXQ7XG4gIHVucmVhZDogbnVtYmVyO1xuICBtZXNzYWdlczogTWVzc2FnZVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY2hhdHNTZXJ2aWNlOiBDaGF0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgQEluamVjdCgncGxhdGZvcm0nKSBwdWJsaWMgcGxhdGZvcm0sXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuY2hhdEluZGV4ID0gK3BhcmFtcy5pbmRleDtcbiAgICAgIHRoaXMuY2hhdCA9IHRoaXMuY2hhdHNTZXJ2aWNlLmNoYXRzW3RoaXMuY2hhdEluZGV4XTtcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnVucmVhZCA9ICtwYXJhbXMudW5yZWFkO1xuICAgIH0pO1xuICAgIHRoaXMuZ2V0TWVzc2FnZXMoKTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VzKCkge1xuICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLmNoYXRzU2VydmljZS5nZXRNZXNzYWdlcyh0aGlzLmNoYXQpO1xuICB9XG5cbiAgZ29CYWNrKCkge1xuICAgIHRoaXMucm91dGVyLmJhY2soKTtcbiAgfVxufVxuIl19