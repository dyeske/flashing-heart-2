led.plotBarGraph(
1,
5
)
basic.pause(100)
basic.forever(function () {
    basic.showString("" + (control.deviceSerialNumber()))
    basic.pause(500)
    basic.showString("RAINA")
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
})
