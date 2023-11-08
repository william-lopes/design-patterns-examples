"use strict";
exports.__esModule = true;
exports.SendEmailOrder = void 0;
var SendEmailOrder = /** @class */ (function () {
    function SendEmailOrder() {
    }
    SendEmailOrder.prototype.execute = function (order) {
        console.log("Send order to email");
    };
    return SendEmailOrder;
}());
exports.SendEmailOrder = SendEmailOrder;
