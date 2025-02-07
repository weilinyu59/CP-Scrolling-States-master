// Code Practice: Scrolling States
// Name:Weilin Yu
// Date: 2/7/2025

'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    type: Phaser.WEBGL,     // for tinting
    width: 400,
    height: 300,
    pixelArt: true,
    zoom: 2,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, Play ]
}

const game = new Phaser.Game(config)