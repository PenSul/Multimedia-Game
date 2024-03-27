export class CardSprites extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setDepth(1001);
        this.setScrollFactor(0);
    }
}