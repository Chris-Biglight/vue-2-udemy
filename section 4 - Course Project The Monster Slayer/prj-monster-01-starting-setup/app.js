function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            roundCount: 0,
            winner: null,
            logMessages: []
        };
    },
    methods: {
        restartGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.roundCount = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            // Attack monster (random number between 12 and 5)
            const attackValue = getRandomNumber(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();

            // Increment count
            this.roundCount++;
        },
        attackPlayer() {
            // Attack player (random number between 15 and 8)
            const attackValue = getRandomNumber(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
            
        },
        specialAttack() {
            // Special attack monster (random number between 15 and 8)
            const attackValue = getRandomNumber(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'special attack', attackValue);
            this.attackPlayer();

            // Increment count
            this.roundCount++;
            
        },
        heal() {
            // Heal Player (random number between 15 and 8)
            const healValue = getRandomNumber(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            
            this.addLogMessage('player', 'heal', healValue);
            
            // Increment count
            this.roundCount++;
            this.attackPlayer();
            
        },
        surrender() {
            this.winner = "monster";
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
        },
        showSpecialAttack() {
            return this.roundCount % 3 !== 0;
        },
        playerWins() {
            return this.winner === "player"
        },
        monsterWins() {
            return this.winner === "monster"
        }

    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // draw
                this.winner = "draw";
            } else if (value <= 0) {
                // player lost
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // draw
                this.winner = "draw";
            } else if (value <= 0) {
                // player lost
                this.winner = "player";
            }
        }
    }
  });
  
  app.mount('#game');
  