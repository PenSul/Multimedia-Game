import { CST } from "../CST.js";
export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }
    // No update needed for LoadScene.
    init(){

    }
    preload(){
        // Load atlas
        this.load.atlas("Effects", "./assets/EffectSprites/effects.png", "./assets/EffectSprites/effects_atlas.json");

        this.load.atlas("Characters", "./assets/CharactersSprites/Characters.png", "./assets/CharactersSprites/Characters.json");

        this.load.atlas("Simple_Characters_Enemy", "./assets/CharactersSprites/Simple_Characters_Enemy.png", "./assets/CharactersSprites/Simple_Characters_Enemy.json");

        this.load.atlas("Simple_Characters_Enemy_2", "./assets/CharactersSprites/Simple_Characters_Enemy_2.png", "./assets/CharactersSprites/Simple_Characters_Enemy_2.json");

        this.load.atlas("FlyingEye", "./assets/CharactersSprites/FlyingEye.png", "./assets/CharactersSprites/FlyingEye.json");

        this.load.atlas("Goblin", "./assets/CharactersSprites/Goblin.png", "./assets/CharactersSprites/Goblin.json");

        this.load.atlas("Knight", "./assets/CharactersSprites/Knight.png", "./assets/CharactersSprites/Knight.json");

        this.load.atlas("Mushroom", "./assets/CharactersSprites/Mushroom.png", "./assets/CharactersSprites/Mushroom.json");

        this.load.atlas("Skeleton", "./assets/CharactersSprites/Skeleton.png", "./assets/CharactersSprites/Skeleton.json");
        
        // Load image, spritesheet, sound for Load and Menu Scene
        this.load.image("background_layer_1", "./assets/oak_woods_v1.0/background/background_layer_1.png");

        this.load.image("background_layer_2", "./assets/oak_woods_v1.0/background/background_layer_2.png");

        this.load.image("background_layer_3", "./assets/oak_woods_v1.0/background/background_layer_3.png");

        this.load.image("Logo", "./assets/Knight_LoadScene/Logo.png");

        this.load.image("PlayButton", "./assets/Knight_LoadScene/PlayButton.png");

        this.load.image("HowToPlayButton", "./assets/Knight_LoadScene/HowToPlayButton.png");

        this.load.image("HowToPlay", "./assets/Knight_LoadScene/HowToPlay.png");

        this.load.audio("Knight_LoadScene_BGM", "./assets/Knight_LoadScene/Knight_LoadScene_Music.mp3");

        
        // Loading Bar cuz why not, its more fancy :)
        var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(240, 270, 680, 50);
            
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 42.5,
                text: 'Loading...',
                style: {
                    font: '24px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2 - 15,
                y: height / 2 + 20,
                text: '0%',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2 - 20,
                y: height / 2 + 65,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            assetText.setOrigin(0.5, 0.5);
            
            this.load.on('progress', function (value) {
                setTimeout(function () {
                    percentText.setText(parseInt(value * 100) + '%');
                    progressBar.clear();
                    progressBar.fillStyle(0xffffff, 1);
                    progressBar.fillRect(250, 280, 660 * value, 30);
                }, 400); 
              });
            
            this.load.on('fileprogress', function (file) {
                setTimeout(function () {
                    assetText.setText('Loading asset: ' + file.key);
                }, 400);
              }, this);

            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });
    }

    create(){
        this.scene.start(CST.SCENES.MENU);
    }
}