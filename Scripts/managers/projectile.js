var managers;
(function (managers) {
    var Projectile = /** @class */ (function () {
        // Constructor
        function Projectile(laserType) {
            this.laserType = laserType;
            this.Start();
        }
        // Methods
        Projectile.prototype.buildLaserPool = function () {
            // Initialize a pool of laser assets
            for (var i = 0; i < this.laserCount; i++) {
                this.Lasers[i] = new objects.Projectile(this.laserType);
            }
        };
        Projectile.prototype.GetLaser = function () {
            var laser = this.Lasers[this.CurrentLaser];
            this.CurrentLaser++;
            if (managers.Game.projectileManager.CurrentLaser > 999) {
                managers.Game.projectileManager.CurrentLaser = 0;
            }
            return laser;
        };
        Projectile.prototype.Start = function () {
            this.laserCount = 1000;
            this.Lasers = new Array();
            this.buildLaserPool();
            this.CurrentLaser = 0;
        };
        Projectile.prototype.Update = function () {
            this.Lasers.forEach(function (laser) {
                laser.Update();
            });
        };
        Projectile.prototype.setLoadqueue = function (assetManager) {
            this.assetManager = assetManager;
        };
        return Projectile;
    }());
    managers.Projectile = Projectile;
})(managers || (managers = {}));
//# sourceMappingURL=projectile.js.map