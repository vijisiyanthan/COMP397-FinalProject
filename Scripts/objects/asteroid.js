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
    var Asteroid = /** @class */ (function (_super) {
        __extends(Asteroid, _super);
        // Constructor
        function Asteroid() {
            var _this = _super.call(this, "Asteroid") || this;
            // Variables
            _this.isDead = false;
            _this.Start();
            _this.alreadyCounted = false;
            _this.HP = 3; //setting the HP Value
            _this.speed = _this.y = Math.floor(Math.random() * -9) - 3;
            return _this;
        }
        // Methods
        Asteroid.prototype.Start = function () {
            this.x = Math.floor(Math.random() * 500) + 50;
            this.y = Math.floor(Math.random() * -500) + -200;
        };
        Asteroid.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Asteroid.prototype.Reset = function () {
            this.isDead = true;
            this.x = -1000;
            this.y = -1000;
        };
        Asteroid.prototype.Move = function () {
            this.y -= this.speed; // default was -10 
        };
        Asteroid.prototype.CheckBounds = function () {
            // Check the bottom boundary
            if (this.y >= 600 + this.height) {
                this.isDead = true;
            }
        };
        //sets the enemy as counted for in game counters
        Asteroid.prototype.setAsCounted = function () {
            this.alreadyCounted = true;
        };
        return Asteroid;
    }(objects.GameObject));
    objects.Asteroid = Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid.js.map