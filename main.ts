input.onButtonPressed(Button.A, function () {
    basic.showString("ZOMBIE")
    radio.sendNumber(110)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("PERSON")
    radio.sendNumber(110)
})
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
loops.everyInterval(600000, function () {
    if (!(input.isGesture(Gesture.Shake))) {
        basic.showString("SOS")
        radio.sendNumber(119)
    } else {
        radio.sendNumber(777)
    }
})
basic.forever(function () {
    while (input.isGesture(Gesture.Shake)) {
        basic.showString("GOOD")
        radio.sendNumber(777)
    }
})
