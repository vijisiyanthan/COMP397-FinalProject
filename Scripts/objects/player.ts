module objects {
  export class Player extends objects.GameObject {
    // Variables
    private laserSpawn: math.Vec2;
    private shootSFX: createjs.AbstractSoundInstance;

    public isDead: boolean;
    // Constructor
    constructor() {
      super("ChrisWestbrook");
      this.isDead = false;
      this.Start();
    }
    // Methods
    public Start(): void {
      this.y = 800;
      this.x = 300;
    }

    public Update(): void {
      this.Move();
      this.CheckBounds();
      this.Fire();
    }


    public Fire(): void {
      if (!this.isDead) {
        // I am alive. I can shoot lasers...maybe?

        // Gets number of ticks ticker has issued
        let ticker: number = createjs.Ticker.getTicks();

        // Constrain laser fire rate
        if ((managers.Game.keyboardManager.shoot) && (ticker % 5 == 0)) {
          // Position our laser spawner
          this.laserSpawn = new math.Vec2(this.x, this.y - this.halfH);

          // IDEAL
          let laser = managers.Game.projectileManager.GetLaser();

          //let currentLaser = managers.Game.laserManager.CurrentLaser;
          //let laser = managers.Game.laserManager.Lasers[currentLaser];

          laser.x = this.laserSpawn.x;
          laser.y = this.laserSpawn.y;

          //managers.Game.laserManager.CurrentLaser++;
          // DON'T DO THIS IN HERE. DO IT IN THE MANAGER
          //if(managers.Game.laserManager.CurrentLaser > 49) {
          //managers.Game.laserManager.CurrentLaser = 0;
          //}

          this.shootSFX = createjs.Sound.play("playerShot");
          this.shootSFX.volume = 0.5;
        }
      }
    }


    public Reset(): void {

      managers.Game.currentScene = config.Scene.OVER;
    }

    public Move(): void {
      // We need a reference to the stage in order to get mouse position
      // this.x = objects.Game.stage.mouseX;

      // Keyboard controls
      if (managers.Game.keyboardManager.moveLeft) {
        this.x -= 5;
      }
      if (managers.Game.keyboardManager.moveRight) {
        this.x += 5;
      }

      if (managers.Game.keyboardManager.moveUp) {
        this.y -= 5;
      }
      if (managers.Game.keyboardManager.moveDown) {
        this.y += 5;
      }

     
    }

    public CheckBounds(): void {
      // Right boundary
      if (this.x >= 600 - this.halfW) {
        this.x = 600 - this.halfW;
      }

      // Left boundary
      if (this.x <= this.halfW) {
        this.x = this.halfW;
      }

      //Top boundry
      if (this.y >= 600 - this.halfH) {
        this.y = 600 - this.halfH;
      }

      //and bottom boundry
      if (this.y < this.halfH) {
        this.y = this.halfH;
      }
    }
  }
}
