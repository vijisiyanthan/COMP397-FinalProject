var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // Constructor
        function Enemy(assetManager) {
            var _this = _super.call(this, assetManager, "enemy") || this;
            _this.Start();
            _this.boundryTouched = true;
            return _this;
        }
        // Methods
        Enemy.prototype.Start = function () {
            this.x = Math.floor(Math.random() * 500) + 50;
            this.y = Math.floor(Math.random() * -800) + -50;
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Enemy.prototype.Reset = function () { };
        Enemy.prototype.Move = function () {
            this.y += 5;
            if (this.boundryTouched === false) {
                this.x -= 3;
            }
            else if (this.boundryTouched === true) {
                this.x += 3;
            }
        };
        Enemy.prototype.InjuredMovement = function () {
            //this.erraticMovement = Math.floor(Math.random() * 3) + 1
            //this.y -= -5;
            if (this.erraticMovement === 1) {
                this.x += 10;
                this.y += 10;
            }
            else if (this.erraticMovement === 2) {
                this.x -= 10;
                this.y -= 10;
            }
            else if (this.erraticMovement === 3) {
                this.x += 10;
                this.y -= 10;
            }
        };
        Enemy.prototype.CheckBounds = function () {
            // Check the bottom boundary
            if (this.y >= 800 + this.height) {
                this.y = -50;
            }
            //Check walls
            if (this.x >= 500 + this.width) {
                this.x = this.x - 50;
                this.boundryTouched = false;
            }
            if (this.x <= 0 + this.width) {
                this.x = this.x + 50;
                this.boundryTouched = true;
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map