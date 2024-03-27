import { CST } from "../CST.js";
import { KnightSprites } from "../KnightSprites.js";
import { EnemySprites } from "../EnemySprites.js";
import { CardSprites } from "../CardSprites.js";
export class PlayScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.PLAY
        });

        this.stopwatchText = null;
        this.startTime = 0;
        this.elapsedTime = 0;
    }
    preload() {
        // Knight Attack
        this.anims.create({
            key: "KnightAttack",
            frameRate: 4,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_KnightAttack_00",
                suffix: ".png",
                start: 0,
                end: 3
            }),
        });
        // Knight Idle
        this.anims.create({
            key: "KnightIdle",
            frameRate: 20,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_KnightIdle_00",
                suffix: ".png",
                start: 0,
                end: 9
            }),
            repeat: -1
        });
        // Knight Run
        this.anims.create({
            key: "KnightRun",
            frameRate: 20,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_KnightRun_00",
                suffix: ".png",
                start: 0,
                end: 9
            }),
            repeat: -1
        });
        // Knight Death
        this.anims.create({
            key: "KnightDeath",
            frameRate: 20,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_KnightDeath_00",
                suffix: ".png",
                start: 0,
                end: 9
            }),
        });
        
        // Flying Eye Attack
        this.anims.create({
            key: "FlyingEyeAttack",
            frameRate: 16,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_FlyingEyeAttack_00",
                suffix: ".png",
                start: 0,
                end: 7
            }),
        });
        // Flying Eye Death
        this.anims.create({
            key: "FlyingEyeDeath",
            frameRate: 8,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_FlyingEyeDeath_00",
                suffix: ".png",
                start: 0,
                end: 3
            }),
        });
        // Flying Eye Flight
        this.anims.create({
            key: "FlyingEyeMove",
            frameRate: 16,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_FlyingEyeFlight_00",
                suffix: ".png",
                start: 0,
                end: 7
            }),
            repeat: -1
        });
        // Flying Eye Take Hit
        this.anims.create({
            key: "FlyingEyeTakeHit",
            frameRate: 8,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_FlyingEyeTakeHit_00",
                suffix: ".png",
                start: 0,
                end: 3
            }),
        });

        // Goblin Attack
        this.anims.create({
            key: "GoblinAttack",
            frameRate: 16,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_GoblinAttack_00",
                suffix: ".png",
                start: 0,
                end: 7
            }),
        });
        // Goblin Death
        this.anims.create({
            key: "GoblinDeath",
            frameRate: 8,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_GoblinDeath_00",
                suffix: ".png",
                start: 0,
                end: 3
            }),
        });
        // Goblin Run
        this.anims.create({
            key: "GoblinMove",
            frameRate: 16,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_GoblinRun_00",
                suffix: ".png",
                start: 0,
                end: 7
            }),
            repeat: -1
        });
        // Goblin Take Hit
        this.anims.create({
            key: "GoblinTakeHit",
            frameRate: 8,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_GoblinTakeHit_00",
                suffix: ".png",
                start: 0,
                end: 3
            }),
        });

        // Mushroom Attack
        this.anims.create({
            key: "MushroomAttack",
            frameRate: 16,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_MushroomAttack_00",
                suffix: ".png",
                start: 0,
                end: 7
            }),
        });
        // Mushroom Death
        this.anims.create({
            key: "MushroomDeath",
            frameRate: 8,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_MushroomDeath_00",
                suffix: ".png",
                start: 0,
                end: 3
            }),
        });
        // Mushroom Run
        this.anims.create({
            key: "MushroomMove",
            frameRate: 16,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_MushroomRun_00",
                suffix: ".png",
                start: 0,
                end: 7
            }),
            repeat: -1
        });
        // Mushroom Take Hit
        this.anims.create({
            key: "MushroomTakeHit",
            frameRate: 8,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_MushroomTakeHit_00",
                suffix: ".png",
                start: 0,
                end: 3
            }),
        });

        // Skeleton Attack
        this.anims.create({
            key: "SkeletonAttack",
            frameRate: 16,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_SkeletonAttack_00",
                suffix: ".png",
                start: 0,
                end: 7
            }),
        });
        // Skeleton Death
        this.anims.create({
            key: "SkeletonDeath",
            frameRate: 8,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_SkeletonDeath_00",
                suffix: ".png",
                start: 0,
                end: 3
            }),
        });
        // Skeleton Take Hit
        this.anims.create({
            key: "SkeletonTakeHit",
            frameRate: 8,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_SkeletonTakeHit_00",
                suffix: ".png",
                start: 0,
                end: 3
            }),
        });
        // Skeleton Walk
        this.anims.create({
            key: "SkeletonMove",
            frameRate: 16,
            frames: this.anims.generateFrameNames("Characters", {
                prefix: "_SkeletonWalk_00",
                suffix: ".png",
                start: 0,
                end: 3
            }),
            repeat: -1
        });

        // Effect
        // Burn Effect
        this.anims.create({
            key: "BurnEffect",
            frameRate: 20,
            frames: this.anims.generateFrameNames("Effects", {
                prefix: "_burn_00",
                start: 0,
                end: 9
            }),
        });
        // BurstOfIce Effect
        this.anims.create({
            key: "BurstOfIceEffect",
            frameRate: 14,
            frames: this.anims.generateFrameNames("Effects", {
                prefix: "_burstofice_00",
                start: 0,
                end: 6
            }),
        });
        // Thunder Effect
        this.anims.create({
            key: "ThunderEffect",
            frameRate: 16,
            frames: this.anims.generateFrameNames("Effects", {
                prefix: "_thunder_00",
                start: 0,
                end: 7
            }),
        });
        this.load.tilemapTiledJSON("mappy", "./assets/maps/mappy.json");
        this.load.image("terrain", "./assets/Knight_LoadScene/ashlands_tileset.png");
        this.load.image("PlayAgain", "./assets/Knight_LoadScene/PlayAgainButton.png");
        this.load.image("damagecard", "./assets/Knight_LoadScene/damage.png");
        this.load.image("healthcard", "./assets/Knight_LoadScene/health.png");
        this.load.image("abilitycard", "./assets/Knight_LoadScene/ability.png");
    }

    create() {
        this.textures.addSpriteSheetFromAtlas("Character_Knight", {frameWidth: 120, frameHeight: 80, atlas:"Simple_Characters_Enemy", frame: "Knight.png"});
        this.textures.addSpriteSheetFromAtlas("Character_FlyingEye", {frameWidth: 150, frameHeight: 150, atlas:"Simple_Characters_Enemy", frame: "FlyingEye.png"});
        this.textures.addSpriteSheetFromAtlas("Character_Goblin", {frameWidth: 150, frameHeight: 150, atlas:"Simple_Characters_Enemy", frame: "Goblin.png"});
        this.textures.addSpriteSheetFromAtlas("Character_Mushroom", {frameWidth: 150, frameHeight: 150, atlas:"Simple_Characters_Enemy", frame: "Mushroom.png"});
        this.textures.addSpriteSheetFromAtlas("Character_Skeleton", {frameWidth: 150, frameHeight: 150, atlas:"Simple_Characters_Enemy_2", frame: "Skeleton.png"});
        
        // Load Map
        let mappy = this.add.tilemap("mappy");
        let terrain = mappy.addTilesetImage("ashlands_tileset", "terrain");
        let bottomlayer = mappy.createLayer("Bottom", [terrain], 0, 0);
        let middlelayer = mappy.createLayer("Middle", [terrain], 0, 0);
        let toplayer = mappy.createLayer("Top", [terrain], 0, 0);
        this.physics.world.setBounds(0, 0, mappy.widthInPixels, mappy.heightInPixels);

        // Character
        let Character_Knight = new KnightSprites(this, 960, 480, "Character_Knight", 100, 0, 1, 100, 15, 5, 150).setSize(25, 45, true).setOffset(40, 35);
        window.Character_Knight = Character_Knight;
        Character_Knight.body.setCollideWorldBounds(true);

        // Create shadow for the knight
        let shadow = this.add.graphics();
        shadow.fillStyle(0x000000, 0.5);
        shadow.fillEllipse(Character_Knight.x, Character_Knight.y + 48, 15, 10);

        this.events.on("update", function() {
            shadow.clear();
            shadow.fillStyle(0x000000, 0.5);
            shadow.fillEllipse(Character_Knight.x, Character_Knight.y + 48, 15, 10);
        });

        // Map physics
        this.physics.add.collider(Character_Knight, toplayer);
        toplayer.setCollisionByProperty({collides: true});
        this.cameras.main.startFollow(Character_Knight);
        
        // Effect
        this.fireattack = this.physics.add.group();
        this.collidedEnemies = [];

        // Keyboard Input
        this.keyboard = this.input.keyboard.addKeys("W, A, S, D, J");

        // Stopwatch Text
        this.stopwatchText = this.add.text(this.cameras.main.width / 2, 10, "00:00:00", {fontFamily: "Monospace", fontSize: 24, color: "#ffffff"}).setOrigin(0.5, 0).setScrollFactor(0).setDepth(1000);

        // HP Text
        this.hptext = this.add.text(10, 10, "HP: " + Character_Knight.hp, {fontFamily: "Monospace", fontSize: 24, color: "#ffffff"}).setOrigin(0, 0).setScrollFactor(0).setDepth(1000);

        // Level Text
        this.leveltext = this.add.text(this.cameras.main.width - 10, 10, "Level: " + Character_Knight.level, {fontFamily: "Monospace", fontSize: 24, color: "#ffffff"}).setOrigin(1, 0).setScrollFactor(0).setDepth(1000);

        // Exp Text
        this.exptext = this.add.text(50, 40, "Exp: " + Character_Knight.exp, {fontFamily: "Monospace", fontSize: 24, color: "#ffffff"}).setOrigin(0.5, 0).setScrollFactor(0).setDepth(1000);
        
        // Start the stopwatch
        this.startStopwatch();

        // Enemies
        let spawnrate = 1200;
        let spawnInterval;
        this.enemies = this.physics.add.group();
        setInterval(() => {
            if (Character_Knight.hp <= 0) {
                clearInterval(spawnInterval);
                return;
            }
            let x = Phaser.Math.Between(0, 1920);
            let y = Phaser.Math.Between(0, 960);
            let distance = Phaser.Math.Distance.Between(Character_Knight.x, Character_Knight.y, x, y);
            
            if (distance > 300) {
                let enemyTypes = [
                    {
                        name: "Character_Goblin",
                        moveAnimation: "GoblinMove",
                        attackAnimation: "GoblinAttack",
                        hitAnimation: "GoblinTakeHit",
                        deathAnimation: "GoblinDeath"
                    },
                    {
                        name: "Character_Skeleton",
                        moveAnimation: "SkeletonMove",
                        attackAnimation: "SkeletonAttack",
                        hitAnimation: "SkeletonTakeHit",
                        deathAnimation: "SkeletonDeath"
                    },
                    {
                        name: "Character_FlyingEye",
                        moveAnimation: "FlyingEyeMove",
                        attackAnimation: "FlyingEyeAttack",
                        hitAnimation: "FlyingEyeTakeHit",
                        deathAnimation: "FlyingEyeDeath"
                    },
                    {
                        name: "Character_Mushroom",
                        moveAnimation: "MushroomMove",
                        attackAnimation: "MushroomAttack",
                        hitAnimation: "MushroomTakeHit",
                        deathAnimation: "MushroomDeath"
                    }
                ];
                
                let enemy = Phaser.Math.Between(0, enemyTypes.length - 1);
                let enemyType = enemyTypes[enemy];
                let enemySprite = new EnemySprites(this, x, y, enemyType.name, this.hp, this.attackdamage, this.speed, this.exp);

                this.enemies.add(enemySprite);
                enemySprite.flipX = (Character_Knight.x < enemySprite.x);
                enemySprite.play(enemyType.moveAnimation, true);
                
                this.physics.add.collider(this.fireattack, enemySprite, function(fire, enemySprite) {
                    if (!fire.collidedEnemies) {
                        fire.collidedEnemies = [];
                    }
                    
                    if (!enemySprite.isCollided) {
                        enemySprite.isCollided = true;
                        enemySprite.attackExp = enemySprite.exp;
                        fire.collidedEnemies.push(enemySprite);
                    }
                
                    if (fire.collidedEnemies.length === enemySprite.length) {
                        fire.collidedEnemies.forEach(function(enemy) {
                            enemy.destroy();
                            Character_Knight.exp += enemy.attackExp;
                        });
                        checkKnightLevelUp();
                        fire.destroy();
                    }
                });
                
                this.physics.add.collider(Character_Knight, enemySprite, function() {
                    if (Character_Knight.anims.currentAnim.key === "KnightAttack") {
                        enemySprite.flipX = (Character_Knight.x < enemySprite.x);
                        enemySprite.play(enemyType.hitAnimation);
                        enemySprite.hp -= Character_Knight.attackdamage;
                        
                        enemySprite.once("animationcomplete-" + enemyType.hitAnimation, function() {
                            enemySprite.flipX = (Character_Knight.x < enemySprite.x);
                            
                            if (enemySprite.hp > 0) {
                                enemySprite.play(enemyType.moveAnimation, true);
                            } else {
                                enemySprite.anims.stop();
                                enemySprite.play(enemyType.deathAnimation);
                                Character_Knight.exp += enemySprite.exp;
                                checkKnightLevelUp();
                                enemySprite.once("animationcomplete-" + enemyType.deathAnimation, function() {
                                    enemySprite.destroy();
                                });
                            }
                        });
                    } else if (enemySprite.anims.currentAnim.key !== enemyType.attackAnimation) {
                        if (!enemySprite.isAttacking) {
                            enemySprite.flipX = (Character_Knight.x < enemySprite.x);
                            enemySprite.play(enemyType.attackAnimation);
                            Character_Knight.hp -= enemySprite.attackdamage;

                            enemySprite.isAttacking = true;
                            
                            enemySprite.once("animationcomplete-" + enemyType.attackAnimation, function() {
                                enemySprite.flipX = (Character_Knight.x < enemySprite.x);
                                enemySprite.play(enemyType.moveAnimation, true);

                                setTimeout(function() {
                                    enemySprite.isAttacking = false;
                                }, 1500);
                            });
                        }
                    }
                });
            }
        }, spawnrate);
        
        // Level up Mechanic
        function checkKnightLevelUp() {
            if (Character_Knight.exp >= Character_Knight.nextlevelexp) {
                Character_Knight.level++;
                
                Character_Knight.burnrange += 5;
                Character_Knight.burndamage += 0.5;
        
                Character_Knight.nextlevelexp += 150
            }
        }

        // Auto burn effect
        setInterval(() => {
            let enemiesInRange = this.enemies.getChildren().filter(function (enemy) {
                let distance = Phaser.Math.Distance.Between(Character_Knight.x, Character_Knight.y, enemy.x, enemy.y);
                return distance <= Character_Knight.burnrange;
            });

            if (enemiesInRange.length > 0) {
                let randomEnemy = Phaser.Utils.Array.GetRandom(enemiesInRange);

                let fire = this.physics.add.sprite(randomEnemy.x, randomEnemy.y, "BurnEffect").play("BurnEffect").setOffset(55, 55);
                this.fireattack.add(fire);
                fire.once('animationcomplete', function () {
                    fire.destroy();
                });

                randomEnemy.hp -= Character_Knight.burndamage;

                if (randomEnemy.hp <= 0) {
                    Character_Knight.exp += randomEnemy.exp;
                    randomEnemy.destroy();
                }
            }
            checkKnightLevelUp();
        }, 500);
        
        // Logic for killing enemy
        this.collidedEnemies.forEach((enemySprite) => {
            Character_Knight.exp += enemySprite.exp;
            checkKnightLevelUp();
        });
        this.collidedEnemies = [];

        // Check Knight HP
        if (Character_Knight.hp <= 0) {

            Character_Knight.body.setVelocity(0);
            Character_Knight.anims.isPlaying = false;

            this.enemies.getChildren().forEach(enemy => {
                enemy.body.setVelocity(0);
                enemy.anims.isPlaying = false;
            })

            this.stopwatchText.setText("You have been defeated!");
            
            let playagainbutton = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, "PlayAgain").setInteractive().setScale(2).setScrollFactor(0).setDepth(1000);
            playagainbutton.on("pointerdown", () => {
                window.location.reload();
            });
        }

        // Cards
        let cardgroup;
        const leveluptimer = this.time.addEvent({
            delay: 10000,
            callback: function () {
                if (Character_Knight.level % 3 === 0 && Character_Knight.exp - (Character_Knight.nextlevelexp + 100) < 0) {
                    let type = Phaser.Utils.Array.GetRandom(["damagecard", "healthcard", "abilitycard"]);
                    levelUpCardEffect.call(this, type);
                }
            },
            callbackScope: this,
            loop: true
        });

        // Card Effect
        function levelUpCardEffect(type) {
            let card = new CardSprites(this, this.cameras.main.width - 85 , 180, type);
            if (!cardgroup) {
                cardgroup = this.add.group();
            }
            cardgroup.add(card);
            this.time.addEvent({
                delay: 5000,
                callback: function () {
                    card.destroy();
                    if (cardgroup.getLength() === 0) {
                        cardgroup = undefined;
                    }
                },
                callbackScope: this
            });
            
            switch(type) {
                case "damagecard":
                    Character_Knight.attackdamage += 0.5;
                    console.log("attackdamage: " + Character_Knight.attackdamage);
                    break;
                case "healthcard":
                    Character_Knight.hp += 5;
                    console.log("hp: " + Character_Knight.hp);
                    break;
                case "abilitycard":
                    Character_Knight.burndamage += 0.5;
                    console.log("burndamage: " + Character_Knight.burndamage);
                    break;
            }
        }
    }

    update() {
        this.enemies.getChildren().forEach(function(enemy) {
            // Calculate the vector from enemy to player
            var directionX = Character_Knight.x - enemy.x;
            var directionY = Character_Knight.y - enemy.y;
        
            // Normalize the vector
            var length = Math.sqrt(directionX * directionX + directionY * directionY);
            directionX /= length;
            directionY /= length;
        
            // Set the enemy's velocity based on the fixed speed
            var speed = enemy.speed;
            enemy.body.velocity.x = directionX * speed;
            enemy.body.velocity.y = directionY * speed;

            enemy.flipX = (Character_Knight.x < enemy.x);
          });

        // Knight Movement
        if(this.keyboard.W.isDown){
            Character_Knight.setVelocityY(-100);
            Character_Knight.anims.play("KnightRun", true);
        }else if(this.keyboard.A.isDown){
            Character_Knight.setFlipX(true);
            Character_Knight.setOffset(52, 35);
            Character_Knight.setVelocityX(-100);
            Character_Knight.anims.play("KnightRun", true);
        }else if(this.keyboard.S.isDown){
            Character_Knight.setVelocityY(100);
            Character_Knight.anims.play("KnightRun", true);
        }else if(this.keyboard.D.isDown){
            Character_Knight.setFlipX(false);
            Character_Knight.setOffset(42, 35);
            Character_Knight.setVelocityX(100);
            Character_Knight.anims.play("KnightRun", true);
        }else if(this.keyboard.J.isDown){
            Character_Knight.setVelocityX(0).setVelocityY(0);
            Character_Knight.anims.play("KnightAttack", {
                onComplete: () => {
                    Character_Knight.anims.play("KnightIdle", true);
                }
            });
        }else{
            Character_Knight.setVelocityX(0).setVelocityY(0);
            Character_Knight.anims.play("KnightIdle", true);
        };

        // Timer
        const elapsedSeconds = Math.floor(this.elapsedTime / 1000);
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;
        const formattedTime = `Time: ${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
        this.stopwatchText.setText(formattedTime);
        this.elapsedTime = this.getTimeElapsed();

        // Hp and Level
        this.hptext.setText("HP: " + Character_Knight.hp);
        this.leveltext.setText("Level: " + Character_Knight.level);
        this.exptext.setText("EXP: " + Character_Knight.exp);
    }

    startStopwatch() {
        this.startTime = this.getTimeElapsed();
    }

    getTimeElapsed() {
        return new Date().getTime() - this.startTime;
    }
    
    padZero(number) {
        return number.toString().padStart(2, "0");
    }
}