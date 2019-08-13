module managers {        // Access to globally-required items
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static scoreBoard: managers.ScoreBoard;
        public static keyboardManager: managers.Keyboard;
        public static highscore: number;
        public static textureAtlas: createjs.SpriteSheet;
        public static projectileManager: managers.Projectile;
        public static EnemyProjectileManager: managers.EnemyProjectile;
        public static currentSceneObject: objects.Scene;
        public static playerPoweredUp: boolean = false;
       
       //Checks the stage you died on and is used by the game over screen button to return to that stage
        public static stageCheckpoint: number;
    }
}