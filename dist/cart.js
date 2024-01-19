"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    Cart.prototype.getTotalCost = function () {
        return this._items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    Cart.prototype.getTotalCostWithDiscount = function (discount) {
        return this._items.reduce(function (total, item) {
            var discountedPrice = item.price - (item.discount || 0);
            return total + discountedPrice;
        }, 0) * (1 - discount / 100);
    };
    Cart.prototype.removeItemById = function (id) {
        this._items = this._items.filter(function (item) { return item.id !== id; });
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=cart.js.map