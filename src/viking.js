// Soldier
class Soldier {
    #health;
    #strenght;

    constructor(health, strength) {
        this.#health = health;
        this.#strenght = strength;
    }

    attack() {
        return this.#strenght
    }

    receiveDamage(damage) {
        this.#health -= damage;
    }
}




// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
