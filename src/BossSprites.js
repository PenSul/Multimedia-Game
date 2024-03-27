export class BossSprites extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, hp, attackdamage, speed) {
        super(scene, x, y, texture);
        this.hp = hp;
        this.attackdamage = attackdamage;
        this.speed = speed;
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);

        // BringerOfDeath
        if (texture === 'Character_BringerOfDeath') {
            this.hp = 100;
            this.speed = 50;
            this.attackdamage = 15;
        }
        // FrostGuardian
        if (texture === 'Character_FrostGuardian') {
            this.hp = 150;
            this.speed = 50;
            this.attackdamage = 15;
        }
        // DemonSlime
        if (texture === 'Character_DemonSlime') {
            this.hp = 200;
            this.speed = 50;
            this.attackdamage = 20;
        }
    }
}