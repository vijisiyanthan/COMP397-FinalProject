var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // Constructor
        function ScoreBoard() {
            this.Init();
        }
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this.score;
            },
            set: function (newScore) {
                this.score = newScore;
                this.scoreLabel.text = "Score " + this.score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this.highScore;
            },
            set: function (newHighScore) {
                this.highScore = newHighScore;
                this.highScoreLabel.text = "High Score: " + this.highScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Objective", {
            get: function () {
                return this.objective;
            },
            set: function (newObjective) {
                this.objective = newObjective;
                this.objectiveLabel.text = "Objective: " + this.objective;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Pause", {
            get: function () {
                return this.pauseText;
            },
            set: function (newText) {
                this.pauseText = newText;
                this.pauseLabel.text = newText;
            },
            enumerable: true,
            configurable: true
        });
        // Methods
        ScoreBoard.prototype.Init = function () {
            this.scoreLabel = new objects.Label("Score: 9999999", "25px", "Consolas", "#00B8B8", 10, 10, false);
            this.highScoreLabel = new objects.Label("High Score: ", "25px", "Consolas", "#00B8B8", 350, 10, false);
            this.objectiveLabel = new objects.Label("Objective: " + this.objective, "16px", "Consolas", "#00B8B8", 180, 580, false);
            this.pauseLabel = new objects.Label("Paused:", "40px", "Consolas", "#9900B0", 200, 300, false);
            this.Score = 0;
            this.HighScore = 0;
            this.objective = " ";
            this.Pause = " ";
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map