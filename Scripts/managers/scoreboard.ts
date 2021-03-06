module managers {
    export class ScoreBoard {
        // Variables
        public scoreLabel: objects.Label;
        public objectiveLabel: objects.Label;
        public highScoreLabel: objects.Label;
        public pauseLabel: objects.Label;

        private score: number;
        private highScore: number;
        private objective: string;
        private pauseText: string;

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

        get Objective(): string {
            return this.objective;
        }
        set Objective(newObjective: string) {
            this.objective = newObjective;
            this.objectiveLabel.text = "Objective: " + this.objective;
        }


        get Pause(): string {
            return this.pauseText;
        }
        set Pause(newText: string) {
            this.pauseText = newText;
            this.pauseLabel.text = newText;
        }
        // Constructor
        constructor() {
            this.Init();
        }
        // Methods
        private Init():void {
            this.scoreLabel = new objects.Label("Score: 9999999", "25px", "Consolas", "#00B8B8", 10, 10, false);
            this.highScoreLabel = new objects.Label("High Score: ", "25px", "Consolas", "#00B8B8", 350, 10, false);
            this.objectiveLabel = new objects.Label("Objective: " + this.objective, "16px", "Consolas", "#00B8B8", 180, 580, false);
            this.pauseLabel = new objects.Label("Paused:", "40px", "Consolas", "#9900B0", 200, 300, false);

            this.Score = 0;
            this.HighScore = 0;
            this.objective = " ";
            this.Pause = " ";
        }
    }
}