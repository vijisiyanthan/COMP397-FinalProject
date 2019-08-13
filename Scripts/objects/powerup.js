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
    var Powerup = /** @class */ (function (_super) {
        __extends(Powerup, _super);
        // Constructor
        function Powerup() {
            var _this = _super.call(this, "eyebot") || this;
            // Variables
            _this.isDead = false;
            _this.Start();
            _this.alreadyCounted = false;
            _this.HP = 3; //setting the HP Value
            _this.speed = _this.y = Math.floor(Math.random() * -9) - 3;
            return _this;
        }
        // Methods
        Powerup.prototype.Start = function () {
            this.x = Math.floor(Math.random() * 500) + 50;
            this.y = Math.floor(Math.random() * -500) + -200;
        };
        Powerup.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Powerup.prototype.Reset = function () {
            this.isDead = true;
            this.x = -1000;
            this.y = -1000;
        };
        Powerup.prototype.Move = function () {
            this.y -= this.speed; // default was -10 
        };
        Powerup.prototype.CheckBounds = function () {
            // Check the bottom boundary
            if (this.y >= 600 + this.height) {
                this.isDead = true;
            }
        };
        //sets the enemy as counted for in game counters
        Powerup.prototype.setAsCounted = function () {
            this.alreadyCounted = true;
        };
        return Powerup;
    }(objects.GameObject));
    objects.Powerup = Powerup;
})(objects || (objects = {}));
//# sourceMappingURL=powerup.js.map