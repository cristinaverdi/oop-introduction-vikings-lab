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

    battelCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);

        if(this.health > 0) {
            return 'A Saxon has received ${damage} points of damage';
        }

        return 'A Saxon has died in combat';
    }
}

// War
class War {
    vikingArmy
    saxonArmy

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.vikingArmy.push(saxon)
    }
}
