var managers;
(function (managers) {
    var EnemyProjectile = /** @class */ (function () {
        // Constructor
        function EnemyProjectile() {
            this.Start();
        }
        // Methods
        EnemyProjectile.prototype.buildLaserPool = function () {
            // Initialize a pool of laser assets
            for (var i = 0; i < this.laserCount; i++) {
                this.Lasers[i] = new objects.EnemyProjectile();
            }
        };
        EnemyProjectile.prototype.GetLaser = function () {
            var laser = this.Lasers[this.CurrentLaser];
            this.CurrentLaser++;
            if (managers.Game.EnemyProjectileManager.CurrentLaser > 49) {
                managers.Game.EnemyProjectileManager.CurrentLaser = 0;
            }
            return laser;
        };
        EnemyProjectile.prototype.Start = function () {
            this.laserCount = 50;
            this.Lasers = new Array();
            this.buildLaserPool();
            this.CurrentLaser = 0;
        };
        EnemyProjectile.prototype.Update = function () {
            this.Lasers.forEach(function (laser) {
                laser.Update();
            });
        };
        EnemyProjectile.prototype.setLoadqueue = function (assetManager) {
            this.assetManager = assetManager;
        };
        return EnemyProjectile;
    }());
    managers.EnemyProjectile = EnemyProjectile;
})(managers || (managers = {}));
//# sourceMappingURL=enemyProjectile.js.map