class Battle {
  constructor(character1, character2) {
    this.Knight = character1;
    this.Wizard = character2;
  }

  start() {
    console.log('Battle begins between ${this.character1} and ${this.character2}!');
    let attacker = this.character1;
    let defender = this.character2;

    While(this.character1.isAlive() && this.character2isAlive()) {
      attacker.attack(defender);

      // Swap roles
      [attacker, defender] = [defender, attacker];
    }

    console.log('${attacker.character1} has fallen! ${defender.character2} is victorius!');
  }
}

// Usage
const Knight = new character("Knight", 100, 20);
const Wizard = new character("Wizard", 80, 25);
const Battle = new Battle(Knight, Wizard);

Battle.start()

