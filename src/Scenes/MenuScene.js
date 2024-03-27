import { CST } from "../CST.js";
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key : CST.SCENES.MENU
        })
    }
    init(){

    }
    create(){
        // Create all kind of shit here like images and sprites here, and make interactive button.
        // All kind of shit 
        // Images 
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "Logo" ).setDepth(1).setScale(2);
        this.add.image(0,0, "background_layer_1").setOrigin(0).setScale(3.75).setDepth(0);
        this.add.image(0,0, "background_layer_2").setOrigin(0).setScale(3.75).setDepth(0);
        this.add.image(0,0, "background_layer_3").setOrigin(0).setScale(3.75).setDepth(0);
        let play = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 20, "PlayButton").setDepth(1);
        let HowToPlayButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 55, "HowToPlayButton").setDepth(1);
        let HowToPlay = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 , "HowToPlay").setVisible(false).setDepth(1).setScale(0.7);

        // Sprites
        let hoverSprites = this.add.sprite(100, 100, "_Run");
        hoverSprites.setScale(1.5);
        hoverSprites.setVisible(false);

        // Animation
        this.anims.create({
            key: "KnightMenuRun",
            frameRate: 20,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_KnightRun_00",
                suffix: ".png",
                start: 0,
                end: 9
            }),
            repeat: -1
        });

        // Music
        // this.sound.pauseOnBlur = false; <------ Delete the // when finish cuz this is annoying

        // ------------------------------------------------------------------------------------------------------------------
        // The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.
        // ------------------------------------------------------------------------------------------------------------------
        // The above Error will show up in the console and I know its annoying but it doesnt kill you?
        // See The Chrome Autoplay Policy change: https://developer.chrome.com/blog/autoplay

        this.sound.play("Knight_LoadScene_BGM", {
            loop: true,
            volume: 0.15
        })

        //Interactive thingy
        /** PointersEvent:
         * pointerover - hovering
         * pointerout - not hovering
         * pointerup - click and release
         * pointerdown - just click
         */

        // PlayButton
        play.setInteractive();
        play.on("pointerover", ()=>{
            hoverSprites.setVisible(true);
            hoverSprites.play("KnightMenuRun");
            hoverSprites.x = play.x - play.width
            hoverSprites.y = play.y - 50
        })
        play.on("pointerout", ()=>{
            hoverSprites.setVisible(false);
        })
        play.on("pointerup", ()=>{
            this.scene.start(CST.SCENES.PLAY);
        })
        // HowToPlayButton
        HowToPlayButton.setInteractive();
        HowToPlayButton.on("pointerover", ()=>{
            HowToPlay.setVisible(true);
        })
        HowToPlayButton.on("pointerout", ()=>{
            HowToPlay.setVisible(false);
        })
    }
}