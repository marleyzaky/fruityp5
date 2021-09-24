let projectile: Sprite = null
let Duck = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c 5 5 5 5 c c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c 5 5 5 f 1 5 5 5 5 5 c 
    . . . c 5 5 5 5 f f 5 5 5 5 5 c 
    . . . c 5 5 5 5 5 5 b 1 b b c c 
    . . c d 5 5 5 5 5 5 b b 3 3 c c 
    . . c d d d 5 5 5 5 5 3 3 3 5 c 
    . . c d d d 5 5 5 5 5 5 5 5 b . 
    . . c d d d d b 5 5 c b b c . . 
    c c c d d d d b b 5 5 c b b c . 
    c d d d d d d d d c c c c c c . 
    c c d d d b 5 5 d c c c c . . . 
    . . c c c b 5 5 b c c b c . . . 
    . . . . . c b 5 5 d c c c . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(11)
controller.moveSprite(Duck)
Duck.setStayInScreen(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . b b 3 3 3 3 b b . . . . 
        . . . c b 3 3 3 3 1 1 b c . . . 
        . . c b 3 3 3 3 3 1 1 1 b c . . 
        . c b 1 1 1 3 3 3 3 1 1 3 c c . 
        c b d 1 1 1 3 3 3 3 3 3 3 b b c 
        c b b d 1 3 3 3 3 3 1 1 1 b b c 
        c b b b 3 3 1 1 3 3 1 1 d d b c 
        . c b b b d d 1 1 3 b d d d c . 
        . . c c b b d d b b b b c c . . 
        . . . . c c c c c c c c . . . . 
        . . . . . b b d 1 1 b . . . . . 
        . . . . . b d d 1 1 b . . . . . 
        `, 50, 0)
    projectile.setPosition(0, randint(0, 120))
})
