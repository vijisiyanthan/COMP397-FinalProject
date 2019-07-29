module managers {
    export class ScoreBoard {
        // Variables
        public scoreLabel: objects.Label;
        public highScoreLabel: objects.Label;

        private score: number;
        private highScore: number;

        get Score():number {
            return this.score;
        }
        set Score(newScore:number) {
            this.score = newScore;
            this.scoreLabel.text = "Score " + this.score;
        }
        get HighScore():number {
            return this.highScore;
        }
        set HighScore(newHighScore:number) {
            this.highScore = newHighScore;
            this.highScoreLabel.text = "High Score: " + this.highScore;
        }
        // Constructor
        constructor() {
            this.Init();
        }
        // Methods
        private Init():void {
            this.scoreLabel = new objects.Label("Score: 9999999", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.highScoreLabel = new objects.Label("High Score: ", "20px", "Consolas", "#FFFF00", 450, 10, false);

            this.Score = 0;
            this.HighScore = 0;
        }
    }
}