module managers {
    export class Projectile {
        // Variables
        private laserCount: number;
        private assetManager: createjs.LoadQueue;
        private laserType: string;

        public Lasers: objects.Projectile[];
        public CurrentLaser: number;
        // Constructor
        constructor(laserType: string) {
            
            this.laserType = laserType;
            this.Start();
            
        }
        // Methods
        private buildLaserPool(): void {
            // Initialize a pool of laser assets
            for (let i = 0; i < this.laserCount; i++) {
                this.Lasers[i] = new objects.Projectile(this.laserType);
            }
        }

        public GetLaser(): objects.Projectile {
            let laser: objects.Projectile = this.Lasers[this.CurrentLaser];
            this.CurrentLaser++;
            if (managers.Game.projectileManager.CurrentLaser > 999) {
                managers.Game.projectileManager.CurrentLaser = 0;
            }

            return laser;
        }
        public Start(): void {
            this.laserCount = 1000;
            this.Lasers = new Array<objects.Projectile>();
            this.buildLaserPool();
            this.CurrentLaser = 0;
        }
        public Update(): void {
            this.Lasers.forEach(laser => {
                laser.Update();
            });
        }


        public setLoadqueue(assetManager: createjs.LoadQueue):void{

            this.assetManager = assetManager;
        }
    }
}