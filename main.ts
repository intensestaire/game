let who_won = -1
let win = true
images.createBigImage(`
    . # # . . . . . . .
    # . . . . . # # . .
    # . # # . # . . # .
    # . . # . # . . # .
    . # # # . . # # . .
    `).scrollImage(1, 200)
while (win == true) {
    images.createImage(`
        # . . . .
        # . . . .
        . . . . .
        . . . . #
        . . . . #
        `).showImage(0)
    basic.pause(200)
    if (input.buttonIsPressed(Button.A)) {
        images.createImage(`
            # . . . .
            # . . . .
            # . . . .
            . . . . #
            . . . . #
            `).showImage(0)
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.B)) {
        images.createImage(`
            # . . . .
            # . . . .
            . . . . #
            . . . . #
            . . . . #
            `).showImage(0)
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.AB)) {
        images.createImage(`
            # . . . .
            # . . . .
            # . . . #
            . . . . #
            . . . . #
            `).showImage(0)
        basic.pause(200)
    } else {
        images.createImage(`
            # . . . .
            # . . . .
            . . . . .
            . . . . #
            . . . . #
            `).showImage(0)
    }
    images.createImage(`
        . # . . .
        . # . . .
        . . . . .
        . . . # .
        . . . # .
        `).showImage(0)
    basic.pause(200)
    if (input.buttonIsPressed(Button.A)) {
        images.createImage(`
            . # . . .
            . # . . .
            . # . . .
            . . . # .
            . . . # .
            `).showImage(0)
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.B)) {
        images.createImage(`
            . # . . .
            . # . . .
            . . . # .
            . . . # .
            . . . # .
            `).showImage(0)
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.AB)) {
        images.createImage(`
            . # . . .
            . # . . .
            . # . # .
            . . . # .
            . . . # .
            `).showImage(0)
        basic.pause(200)
    } else {
        images.createImage(`
            . # . . .
            . # . . .
            . . . . .
            . . . # .
            . . . # .
            `).showImage(0)
    }
    images.createImage(`
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        `).showImage(0)
    basic.pause(200)
    if (input.buttonIsPressed(Button.A)) {
        images.createImage(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `).showImage(0)
        basic.pause(200)
        win = false
        who_won = 0
        break;
    } else if (input.buttonIsPressed(Button.B)) {
        images.createImage(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `).showImage(0)
        basic.pause(200)
        win = false
        who_won = 1
        break;
    } else if (input.buttonIsPressed(Button.AB)) {
        images.createImage(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `).showImage(0)
        basic.pause(200)
        win = false
        who_won = 2
        break;
    } else {
        images.createImage(`
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            . . # . .
            `).showImage(0)
    }
    images.createImage(`
        . . . # .
        . . . # .
        . . . . .
        . # . . .
        . # . . .
        `).showImage(0)
    basic.pause(200)
    if (input.buttonIsPressed(Button.A)) {
        images.createImage(`
            . . . # .
            . . . # .
            . . . # .
            . # . . .
            . # . . .
            `).showImage(0)
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.B)) {
        images.createImage(`
            . . . # .
            . . . # .
            . # . . .
            . # . . .
            . # . . .
            `).showImage(0)
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.AB)) {
        images.createImage(`
            . . . # .
            . . . # .
            . # . # .
            . # . . .
            . # . . .
            `).showImage(0)
        basic.pause(200)
    } else {
        images.createImage(`
            . . . # .
            . . . # .
            . . . . .
            . # . . .
            . # . . .
            `).showImage(0)
    }
    images.createImage(`
        . . . . #
        . . . . #
        . . . . .
        # . . . .
        # . . . .
        `).showImage(0)
    basic.pause(200)
    if (input.buttonIsPressed(Button.A)) {
        images.createImage(`
            . . . . #
            . . . . #
            . . . . #
            # . . . .
            # . . . .
            `).showImage(0)
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.B)) {
        images.createImage(`
            . . . . #
            . . . . #
            # . . . .
            # . . . .
            # . . . .
            `).showImage(0)
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.AB)) {
        images.createImage(`
            . . . . #
            . . . . #
            # . . . #
            # . . . .
            # . . . .
            `).showImage(0)
        basic.pause(200)
    } else {
        images.createImage(`
            . . . . #
            . . . . #
            . . . . .
            # . . . .
            # . . . .
            `).showImage(0)
    }
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(200)
    control.reset()
}
if (who_won == 0 && win == false) {
    for (let index = 0; index < 5000; index++) {
        for (let index = 0; index < 5000; index++) {
            for (let index = 0; index < 5000; index++) {
                images.createBigImage(`
                    # # . . # . . . . #
                    # . # . # . . . # .
                    # # . . # . . . # #
                    # . . . # . . . # .
                    # . . . # # # . # .
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    . . # . # . # # # .
                    # . . # . . # . . .
                    # . . # . . # # # .
                    # . . # . . # . . .
                    # . . # . . # # # .
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    # # . . . # . . . .
                    # . # . # # . . # .
                    # # . . . # . . # .
                    # . # . . # . . # .
                    # . # . # # # . . #
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    . . . . . # # . . #
                    # . # . # . . # . #
                    # . # . # . . # . #
                    # . # . # . . # . #
                    . # . . . # # . . #
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    . . . # . # . . . .
                    # . . # . # . . . .
                    . # . # . # . . . .
                    . . # # . . . . . .
                    . . . # . # . . . .
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    `).scrollImage(1, 200)
            }
        }
    }
} else if (who_won == 1 && win == false) {
    for (let index = 0; index < 5000; index++) {
        for (let index = 0; index < 5000; index++) {
            for (let index = 0; index < 5000; index++) {
                images.createBigImage(`
                    # # . . # . . . . #
                    # . # . # . . . # .
                    # # . . # . . . # #
                    # . . . # . . . # .
                    # . . . # # # . # .
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    . . # . # . # # # .
                    # . . # . . # . . .
                    # . . # . . # # # .
                    # . . # . . # . . .
                    # . . # . . # # # .
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    # # . . . # . . . .
                    # . # . # . # . . #
                    # # . . . . # . . #
                    # . # . . # . . . #
                    # . # . # # # # . .
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    . . . . . . # # . .
                    . # . # . # . . # .
                    . # . # . # . . # .
                    . # . # . # . . # .
                    # . # . . . # # . .
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    # . . . # . # . . .
                    # # . . # . # . . .
                    # . # . # . # . . .
                    # . . # # . . . . .
                    # . . . # . # . . .
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    `).scrollImage(1, 200)
            }
        }
    }
} else if (who_won == 2) {
    for (let index = 0; index < 5000; index++) {
        for (let index = 0; index < 5000; index++) {
            for (let index = 0; index < 5000; index++) {
                images.createBigImage(`
                    # # # . # # # . # #
                    . # . . . # . . # .
                    . # . . . # . . # #
                    . # . . . # . . # .
                    . # . . # # # . # #
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    # . # . . . . . . .
                    . . # . . . . . . .
                    # . # . . . . . . .
                    . . . . . . . . . .
                    # . # . . . . . . .
                    `).scrollImage(1, 200)
                images.createBigImage(`
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    . . . . . . . . . .
                    `).scrollImage(1, 200)
            }
        }
    }
}
basic.forever(function () {
	
})
