export class KnightSprites extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, hp, exp, level, nextlevelexp, attackdamage, burndamage, burnrange) {
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
        this.hp = hp;
        this.exp = exp;
        this.level = level;
        this.nextlevelexp = nextlevelexp;
        this.attackdamage = attackdamage;
        this.burndamage = burndamage;
        this.burnrange = burnrange;
        this.setScale(1.25);
    }
}
