"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message() {
        this.text = '';
        this.created = Date.now();
    }
    Message.prototype.toString = function () {
        var _a = this, created = _a.created, text = _a.text;
        return "Message created at: " + created + " - Text: " + text;
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQTtJQUFBO1FBRUUsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdULFlBQU8sR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFPeEMsQ0FBQztJQUpDLDBCQUFRLEdBQVI7UUFDUSxJQUFBLFNBQXdCLEVBQXRCLG9CQUFPLEVBQUUsY0FBSSxDQUFVO1FBQy9CLE1BQU0sQ0FBQyx5QkFBdUIsT0FBTyxpQkFBWSxJQUFNLENBQUM7SUFDMUQsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhdCB9IGZyb20gJy4vY2hhdC5tb2RlbCc7XG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi9jb250YWN0Lm1vZGVsJztcbmltcG9ydCB7IFNlbnRTdGF0dXMgfSBmcm9tICcuL3NlbnQtc3RhdHVzLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBpZD86IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nID0gJyc7XG4gIGNoYXQ6IENoYXQ7XG4gIHNlbmRlcjogQ29udGFjdDtcbiAgcmVhZG9ubHkgY3JlYXRlZDogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgc2VudDogU2VudFN0YXR1cztcblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgY3JlYXRlZCwgdGV4dCB9ID0gdGhpcztcbiAgICByZXR1cm4gYE1lc3NhZ2UgY3JlYXRlZCBhdDogJHtjcmVhdGVkfSAtIFRleHQ6ICR7dGV4dH1gO1xuICB9XG59XG4iXX0=