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
        // Methods
        ScoreBoard.prototype.Init = function () {
            this.scoreLabel = new objects.Label("Score: 9999999", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.highScoreLabel = new objects.Label("High Score: ", "20px", "Consolas", "#FFFF00", 450, 10, false);
            this.Score = 0;
            this.HighScore = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map