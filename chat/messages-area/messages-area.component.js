"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var MessagesAreaComponent = (function () {
    function MessagesAreaComponent(platform) {
        this.platform = platform;
    }
    MessagesAreaComponent.prototype.ngOnInit = function () {
        this.messages = this.messages.slice(0, 50);
    };
    MessagesAreaComponent.prototype.isContinuation = function (idx) {
        return (!this.messages[idx].sender && this.messages[idx - 1] &&
            !this.messages[idx - 1].sender) ||
            (this.messages[idx].sender && this.messages[idx - 1] &&
                this.messages[idx - 1].sender);
    };
    MessagesAreaComponent.prototype.getIcon = function (message) {
        switch (message.sent) {
            case core_2.SentStatus.NOT_SENT:
                return 'mdi-access-time';
            case core_2.SentStatus.SENT:
                return 'mdi-done';
            default:
                return 'mdi-done-all';
        }
    };
    MessagesAreaComponent.prototype.isViewed = function (message) {
        return message.sent === core_2.SentStatus.VIEWED;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MessagesAreaComponent.prototype, "messages", void 0);
    MessagesAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-messages-area',
            templateUrl: './messages-area.component.html',
            styleUrls: ['./messages-area.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object])
    ], MessagesAreaComponent);
    return MessagesAreaComponent;
}());
exports.MessagesAreaComponent = MessagesAreaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUNzRDtBQUN0RCxtQ0FBaUQ7QUFTakQ7SUFHRSwrQkFBdUMsUUFBUTtRQUFSLGFBQVEsR0FBUixRQUFRLENBQUE7SUFBRyxDQUFDO0lBRW5ELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsOENBQWMsR0FBZCxVQUFlLEdBQVc7UUFDeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCx1Q0FBTyxHQUFQLFVBQVEsT0FBZ0I7UUFDdEIsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxpQkFBVSxDQUFDLFFBQVE7Z0JBQ3RCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixLQUFLLGlCQUFVLENBQUMsSUFBSTtnQkFDbEIsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNwQjtnQkFDRSxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLE9BQWdCO1FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7SUE1QlE7UUFBUixZQUFLLEVBQUU7OzJEQUFxQjtJQURsQixxQkFBcUI7UUFQakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7WUFDNUMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztRQUlhLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBOztPQUhwQixxQkFBcUIsQ0E4QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LFxuICAgICAgICAgSW5qZWN0LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlLCBTZW50U3RhdHVzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25zLW1lc3NhZ2VzLWFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZXMtYXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2VzLWFyZWEuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZXNBcmVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcy5zbGljZSgwLCA1MCk7XG4gIH1cblxuICBpc0NvbnRpbnVhdGlvbihpZHg6IG51bWJlcikge1xuICAgIHJldHVybiAoIXRoaXMubWVzc2FnZXNbaWR4XS5zZW5kZXIgJiYgdGhpcy5tZXNzYWdlc1tpZHggLSAxXSAmJlxuICAgICAgICAgICAgIXRoaXMubWVzc2FnZXNbaWR4IC0gMV0uc2VuZGVyKSB8fFxuICAgICAgICAgICAodGhpcy5tZXNzYWdlc1tpZHhdLnNlbmRlciAmJiB0aGlzLm1lc3NhZ2VzW2lkeCAtIDFdICYmXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2lkeCAtIDFdLnNlbmRlcik7XG4gIH1cblxuICBnZXRJY29uKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2Uuc2VudCkge1xuICAgICAgY2FzZSBTZW50U3RhdHVzLk5PVF9TRU5UOlxuICAgICAgICByZXR1cm4gJ21kaS1hY2Nlc3MtdGltZSc7XG4gICAgICBjYXNlIFNlbnRTdGF0dXMuU0VOVDpcbiAgICAgICAgcmV0dXJuICdtZGktZG9uZSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ21kaS1kb25lLWFsbCc7XG4gICAgfVxuICB9XG5cbiAgaXNWaWV3ZWQobWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHJldHVybiBtZXNzYWdlLnNlbnQgPT09IFNlbnRTdGF0dXMuVklFV0VEO1xuICB9XG59XG4iXX0=