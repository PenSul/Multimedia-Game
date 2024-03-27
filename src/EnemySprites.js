export class EnemySprites extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, hp, attackdamage, speed, exp) {
        super(scene, x, y, texture);
        this.hp = hp;
        this.attackdamage = attackdamage;
        this.speed = speed;
        this.exp = exp;
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);

        // Goblin
        if(texture === 'Character_Goblin') {
            this.hp = 6;
            this.speed = 30;
            this.attackdamage = 1;
            this.exp = 20; // 20 for testing, o5
            this.setSize(40, 40, true);
        }
        // Skeleton
        if(texture === 'Character_Skeleton') {
            this.hp = 12;
            this.speed = 60;
            this.attackdamage = 2;
            this.exp = 20; // 20 for testing, o5
            this.setSize(40, 40, true);
        }
        // FlyingEye
        if(texture === 'Character_FlyingEye') {
            this.hp = 15;
            this.speed = 50;
            this.attackdamage = 3;
            this.exp = 20; // 20 for testing, o5
            this.setSize(40, 40, true);
        }
        // Mushroom
        if(texture === 'Character_Mushroom') {
            this.hp = 20;
            this.speed = 40;
            this.attackdamage = 4;
            this.exp = 20; // 20 for testing, o5
            this.setSize(40, 40, true);
        }
    }
}