namespace SpriteKind {
    export const bbbtttgggg = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        ........................
        ....ffffff..............
        ..ffeeeef2f.............
        .ffeeeef222f............
        .feeeffeeeef...cc.......
        .ffffee2222ef.cdc.......
        .fe222ffffe2fcddc.......
        fffffffeeeffcddc........
        ffe44ebf44ecddc.........
        fee4d41fddecdc..........
        .feee4dddedccc..........
        ..ffee44e4dde...........
        ...f222244ee............
        ...f2222e2f.............
        ...f444455f.............
        ....ffffff..............
        .....fff................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        .......fff..............
        ....fffff2f.............
        ..ffeeeee22ff...........
        .ffeeeeee222ff..........
        .feeeefffeeeef..........
        .fffffeee2222ef.........
        fffe222fffffe2f.........
        fffffffffeeefff.....cc..
        fefe44ebbf44eef...ccdc..
        .fee4d4bbfddef..ccddcc..
        ..feee4dddddfeecdddc....
        ...f2222222eeddcdcc.....
        ...f444445e44ddccc......
        ...ffffffffeeee.........
        ...fff...ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        .......ff...............
        ....ffff2ff.............
        ..ffeeeef2ff............
        .ffeeeeef22ff...........
        .feeeeffeeeef...........
        .fffffee2222ef..........
        fffe222ffffe2f..........
        ffffffffeeefff..........
        fefe44ebf44eef..........
        .fee4d4bfddef...........
        ..feee4dddee.c..........
        ...f2222eeddeccccccc....
        ...f444e44ddecddddd.....
        ...fffffeeee.ccccc......
        ..ffffffff...c..........
        ..fff..ff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ....ffffff..............
        ..ffeeeef2f.............
        .ffeeeef222f............
        .feeeffeeeef............
        .ffffee2222ef...........
        .fe222ffffe2f...........
        fffffffeeefff...........
        ffe44ebf44eef...........
        fee4d41fddef............
        .feee4ddddf.............
        ..fdde444ef.............
        ..fdde22ccc.............
        ...eef22cdc.............
        ...f4444cddc............
        ....fffffcddc...........
        .....fff..cddc..........
        ...........cdc..........
        ............cc..........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        ..feeddddddeef..........
        ...fee4444eef...........
        ..e4f222222f4e..........
        ..4df222222fd4..........
        ..44f445544f44..........
        .....ffffff.............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    false
    )
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . 1 1 . . . . 
        . . . . . . . . . . b 1 . . . . 
        . . . . . . . . . . b 1 . . . . 
        . . . . . . . . . . 1 1 . . . . 
        . . . . . . . . . b 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . b 1 . . . . . . 
        b . . . . b b b 1 1 . . . . . . 
        1 b b b b 1 1 1 1 . . . . . . . 
        . 1 1 1 1 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, hero, 75, 0)
    pause(300)
    sprites.destroy(projectile)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bbbtttgggg, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bbbtttgggg, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.coolRadial, 500)
})
let projectile: Sprite = null
let bbbttttggg: Sprite = null
let hero: Sprite = null
info.setScore(0)
info.changeLifeBy(5)
hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level7`)
controller.moveSprite(hero, 100, 100)
scene.cameraFollowSprite(hero)
for (let value of tiles.getTilesByType(sprites.dungeon.floorLight5)) {
    bbbttttggg = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ffddddff........
        .......fbddddddbf.......
        .......fddddddddf.......
        ......fddddddddddf......
        ......fddddddddddf......
        ......fddddddddddf......
        ......fbdbfddfbdbf......
        ......fcdcfddfcdcf......
        .......fbddddddbf.......
        ......fffcdbdbdffff.....
        ....fcdddcbfbfcdddcf....
        ....fdbdbdffffdbdbdf....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.bbbtttgggg)
    tiles.placeOnTile(bbbttttggg, value)
}
game.onUpdate(function () {
    bbbttttggg.follow(hero, 50)
    bbbttttggg.follow(hero, 50)
    bbbttttggg.follow(hero, 50)
})
