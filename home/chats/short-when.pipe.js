"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var isToday = require("date-fns/is_today");
var isYesterday = require("date-fns/is_yesterday");
var parse = require("date-fns/parse");
var ShortWhenPipe = (function () {
    function ShortWhenPipe() {
    }
    ShortWhenPipe.prototype.transform = function (value) {
        var language = platform_1.device.language;
        if (platform_1.device.region) {
            language += "-" + platform_1.device.region;
        }
        var datePipe = new common_1.DatePipe(language);
        var parsedDate = parse(value);
        if (isToday(parsedDate)) {
            return datePipe.transform(parsedDate, 'shortTime');
        }
        if (isYesterday(parsedDate)) {
            return 'yesterday';
        }
        return datePipe.transform(parsedDate, 'shortDate');
    };
    ShortWhenPipe = __decorate([
        core_1.Pipe({
            name: 'shortWhen',
            pure: true,
        })
    ], ShortWhenPipe);
    return ShortWhenPipe;
}());
exports.ShortWhenPipe = ShortWhenPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtd2hlbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcnQtd2hlbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQTJDO0FBQzNDLHNDQUFvRDtBQUNwRCxxQ0FBa0M7QUFFbEMsMkNBQTZDO0FBQzdDLG1EQUFxRDtBQUNyRCxzQ0FBd0M7QUFNeEM7SUFBQTtJQW9CQSxDQUFDO0lBbEJDLGlDQUFTLEdBQVQsVUFBVSxLQUE2QjtRQUNyQyxJQUFJLFFBQVEsR0FBRyxpQkFBTSxDQUFDLFFBQVEsQ0FBQztRQUMvQixFQUFFLENBQUMsQ0FBQyxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEIsUUFBUSxJQUFJLE1BQUksaUJBQU0sQ0FBQyxNQUFRLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQU0sUUFBUSxHQUFHLElBQUksaUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyQixDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFuQlUsYUFBYTtRQUp6QixXQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7T0FDVyxhQUFhLENBb0J6QjtJQUFELG9CQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICdwbGF0Zm9ybSc7XG5cbmltcG9ydCAqIGFzIGlzVG9kYXkgZnJvbSAnZGF0ZS1mbnMvaXNfdG9kYXknO1xuaW1wb3J0ICogYXMgaXNZZXN0ZXJkYXkgZnJvbSAnZGF0ZS1mbnMvaXNfeWVzdGVyZGF5JztcbmltcG9ydCAqIGFzIHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnc2hvcnRXaGVuJyxcbiAgcHVyZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU2hvcnRXaGVuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgRGF0ZSk6IHN0cmluZyB7XG4gICAgbGV0IGxhbmd1YWdlID0gZGV2aWNlLmxhbmd1YWdlO1xuICAgIGlmIChkZXZpY2UucmVnaW9uKSB7XG4gICAgICBsYW5ndWFnZSArPSBgLSR7ZGV2aWNlLnJlZ2lvbn1gO1xuICAgIH1cbiAgICBjb25zdCBkYXRlUGlwZSA9IG5ldyBEYXRlUGlwZShsYW5ndWFnZSk7XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlKHZhbHVlKTtcblxuICAgIGlmIChpc1RvZGF5KHBhcnNlZERhdGUpKSB7XG4gICAgICByZXR1cm4gZGF0ZVBpcGUudHJhbnNmb3JtKHBhcnNlZERhdGUsICdzaG9ydFRpbWUnKTtcbiAgICB9XG5cbiAgICBpZiAoaXNZZXN0ZXJkYXkocGFyc2VkRGF0ZSkpIHtcbiAgICAgIHJldHVybiAneWVzdGVyZGF5JztcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZVBpcGUudHJhbnNmb3JtKHBhcnNlZERhdGUsICdzaG9ydERhdGUnKTtcbiAgfVxufVxuIl19