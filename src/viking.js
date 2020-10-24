// Soldier
class Soldier {
    health;
    strength;

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}




// Viking
class Viking extends Soldier {
    name
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }

        return `${this.name} has died in act of combat`

    }

}

// Saxon
class Saxon {}

// War
class War {}
