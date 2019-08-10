module managers {
    export class EnemyProjectile {
        // Variables
        private laserCount: number;
        private assetManager: createjs.LoadQueue;

        public Lasers: objects.EnemyProjectile[];
        public CurrentLaser: number;
        // Constructor
        constructor() {
            this.Start();
        }
        // Methods
        private buildLaserPool(): void {
            // Initialize a pool of laser assets
            for (let i = 0; i < this.laserCount; i++) {
                this.Lasers[i] = new objects.EnemyProjectile();
            }
        }

        public GetLaser(): objects.EnemyProjectile {
            let laser: objects.EnemyProjectile = this.Lasers[this.CurrentLaser];
            this.CurrentLaser++;
            if (managers.Game.EnemyProjectileManager.CurrentLaser > 49) {
                managers.Game.EnemyProjectileManager.CurrentLaser = 0;
            }

            return laser;
        }
        public Start(): void {
            this.laserCount = 50;
            this.Lasers = new Array<objects.EnemyProjectile>();
            this.buildLaserPool();
            this.CurrentLaser = 0;
        }
        public Update(): void {
            this.Lasers.forEach(laser => {
                laser.Update();
            });
        }


        public setLoadqueue(assetManager: createjs.LoadQueue): void {

            this.assetManager = assetManager;
        }
    }
}