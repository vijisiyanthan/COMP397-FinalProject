module objects {
    export class GameObject extends createjs.Sprite {
        // Variables
        protected speedX: number;
        protected speedY: number;

        public width: number;
        public height: number;
        public halfW: number;   // Half-width; Useful for collision detection
        public halfH: number;   // Half-height
        public isColliding: boolean;
        public HP: number; // HP value needed for some elements in the game

        // Constructor
        constructor(imageString: string) {
            super(managers.Game.textureAtlas, imageString);

            this.name = imageString;

            this.Init();
        }
        // Methods
        private Init(): void {
            // Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            this.HP = 0;

            // Registration Points
            this.regX = this.halfW;
            this.regY = this.halfH;

            this.isColliding = false;
        }

        public Start(): void { }
        public Update(): void { }
        public Reset(): void { }
        public CheckBounds(): void { }
        public Move(): void { }
    }
}