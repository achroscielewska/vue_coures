new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    computed: {
    },
    watch: {

    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            const damge = this.calculateDamege(3, 10);
            this.monsterHealth -= damge
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damge
            })
            if (this.checkWin()) {
                return;
            };

            this.monsterAttacts(3, 10);
        },
        specialAttack: function () {
            const damge = this.calculateDamege(13, 20);
            this.monsterHealth -= damge;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits with specialAttack Monster for ' + damge
            })
            if (this.checkWin()) {
                return;
            };

            this.monsterAttacts(13, 20);
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10 '
            })

            this.monsterAttacts(3, 10)

        },
        giveUp: function () {
            this.gameIsRunning = false;

        },
        monsterAttacts: function (min, max) {
            const damge = this.calculateDamege(min, max);
            this.playerHealth -= damge;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damge
            })
            this.checkWin();
        },
        calculateDamege: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function (min, max) {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }

    }
});