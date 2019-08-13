module objects {
    export class Projectile extends objects.GameObject {
        // Variables
        private speed: number = -10;

        // Constructor
        constructor(text: string) {
            super(text);
            this.Start();
        }
        // Methods
        public Start(): void {
            // Might have to change the scale of the laser

            // Set the speed of my laser
            this.speedY = this.speed;

            this.Reset();
        }
        public Update(): void {
            this.Move();
        }
        public Reset(): void {
            this.x = -5000;
            this.y = -5000;
        }
        public Main(): void { }
        public Move(): void {
            this.y += this.speedY;
        }
        public CheckBounds(): void { }
    }
}