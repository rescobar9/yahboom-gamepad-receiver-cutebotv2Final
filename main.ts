radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        cuteBot.forward()
    } else if (receivedString == "R") {
        cuteBot.turnright()
    } else if (receivedString == "L") {
        cuteBot.turnleft()
    } else if (receivedString == "B") {
        cuteBot.backforward()
    } else if (receivedString == "S") {
        cuteBot.motors(0, 0)
        basic.showIcon(IconNames.Heart)
    } else if (receivedString == "LEDL") {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    } else if (receivedString == "LEDR") {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
    } else if (receivedString == "LEDOFF") {
        cuteBot.singleheadlights(cuteBot.RGBLights.ALL, 0, 0, 0)
        basic.showString("Hello!")
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
