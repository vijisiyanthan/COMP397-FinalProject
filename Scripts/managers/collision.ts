module managers {
    export class Collision {
       
       
        public static CheckAABB(object1: objects.GameObject, object2: objects.GameObject) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

            // CHECK ALL BOUNDS
            if ((object1.x + object1.halfW) > (object2.x - object2.halfW) &&
                (object1.x - object1.halfW) < (object2.x + object2.halfW) &&
                (object1.y + object1.halfH) > (object2.y - object2.halfH) &&
                (object1.y - object1.halfH) < (object2.y + object2.halfH)) {
                switch (object2.name) {
                    case "QualionFighter":

                    if(object1.name != "plasma"){

                        
                       
                        if (managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                            managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                            managers.Game.highscore = managers.Game.scoreBoard.HighScore;
                        }
                        let explosion = new objects.Explosion( object2.x - object2.halfW, object2.y - object2.halfH);
                        managers.Game.currentSceneObject.addChild(explosion);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);

                        if (object1.name === "ChrisWestbrook") {
                            explosion.on("animationend", object1.Reset);
                        }
                        else {

                           
                            object1.Reset();
                                
                        }
                        
                        object2.Reset();

                        if(managers.Game.scoreBoard.Score === 2050){
                        //Wait for explosion on final kill of level 1
                            explosion.on("animationend", this.increaseScore);
                        }

                        else{
                            this.increaseScore()
                        }

                    } //end of if
                        break;

                        //Checking for player getting hit by enemy plasma
                        case "ChrisWestbrook":
                        if (object1.name === "plasma") {


                            let explosion = new objects.Explosion(object2.x - object2.halfW, object2.y - object2.halfH);
                            managers.Game.currentSceneObject.addChild(explosion);
                            managers.Game.currentSceneObject.removeChild(object1);
                            managers.Game.currentSceneObject.removeChild(object2);

                            explosion.on("animationend", object2.Reset);
                            object1.Reset();
                        }

                        break; //end of checking for enemy projectiles
                        
                }
            }
        }
       
       
       
       
        public static Check(object1: objects.GameObject, object2:objects.GameObject): boolean {
            // Create 2 temp Vec2 objects user for collision detection.
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

            if(math.Vec2.Distance(P1, P2) < (object1.halfH + object2.halfH)) {
                if(!object2.isColliding) {
                    // Collision successfull
                    // console.log("Collision with " + object2.name);
                    switch(object2.name) {
                        case "enemy":
                            createjs.Sound.play("explode");
                            // Increase my score value
                            objects.Game.scoreBoard.Score += 50;
                        break;
                    }

                    
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
                return false;
            }
        }


        public static increaseScore(){
            managers.Game.scoreBoard.Score += 50;
        }
    }
}