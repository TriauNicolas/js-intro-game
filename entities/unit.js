export class Unit {
    static instances = [];

    constructor (name, type) {
        // Entities properties
        this.name = name;
        this.type = type
        this.health = 50;
        this.minDamage = 5;
        this.maxDamage = 15;

        // Reference all the instances
        Unit.instances.push(this)
    }

    attackRandomTarget() {
        const targets = Unit.instances.filter(element => element.type != this.type);
        const randomIndex = Math.floor(Math.random() * targets.length);
        const target = targets[randomIndex];

        if (target) {
            console.log(`${this.name} attacks Monster ${target.name}!`);
        } else {
            console.log('No target found');
            return
        }

        // Perform the attack
        this.attack(target);
    }

    attack(target) {
        const damageDone = Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1)) + this.minDamage;
        target.health -= damageDone;
    }
}
