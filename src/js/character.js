export default class Character {
  constructor(name, health, attackDamage, armorClass) {
    this.name = name;
    this.health = health;
    this.attackDamage = attackDamage;
    this.armorClass = armorClass;
  }

  recieveDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} recieves $damage} damage. Current health: ${this.health}`);
  }

  attack(target) {
    console.log(`${this.name}' attacks ${target.name} for ${this.attackDamage} damage! `);
    target.recieveDamage(this.attackDamage);
  }

  isAlive() {
    return this.health > 0;
  }
}