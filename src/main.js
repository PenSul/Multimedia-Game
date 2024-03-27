/**Tab for ease coding */
/** @type {import("../typings/phaser")} */

import { LoadScene } from "./Scenes/LoadScene.js";
import { MenuScene } from "./Scenes/MenuScene.js";
import { PlayScene } from "./Scenes/PlayScene.js";

let game = new Phaser.Game({
    width: 1200,
    height: 675,
    scene:[
        LoadScene, MenuScene, PlayScene
    ],
    render:{
        pixelArt: true
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
})