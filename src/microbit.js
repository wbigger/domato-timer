let plotxy = 0
let plotMinutes = 0
let statusIdle = 0
let statusRest = 0
let index = 0
let pomodoroSeconds = 0
let dailyCounter = 0
let statusRunning = 0
let blinkToggle = false
let status = 0
let index4 = 0
basic.forever(() => {
    basic.clearScreen()
    if (status == statusIdle) {
        basic.showIcon(IconNames.Triangle)
    } else {
        if (pomodoroSeconds == 0) {
            if (blinkToggle) {
                if (status == statusRunning) {
                    basic.showIcon(IconNames.Yes)
                } else {
                    basic.showIcon(IconNames.Diamond)
                }
            }
            blinkToggle = !(blinkToggle)
            basic.pause(1000)
        } else {
            plotMinutes = pomodoroSeconds / 60
            if (plotMinutes == 0) {
                if (blinkToggle) {
                    if (status == statusRest) {
                        led.plot(4, 4)
                    } else {
                        led.plot(0, 0)
                    }
                }
                blinkToggle = !(blinkToggle)
                pomodoroSeconds += -2
                pomodoroSeconds = Math.max(pomodoroSeconds, 0)
                basic.pause(2000)
            } else {
                // plot one led for each minute
                for (let index43 = 0; index43 <= plotMinutes - 1; index43++) {
                    plotxy = index43
                    if (status == statusRest) {
                        plotxy = 24 - plotxy
                    }
                    led.plot(plotxy % 5, plotxy / 5)
                }
                pomodoroSeconds += -5
                pomodoroSeconds = Math.max(pomodoroSeconds, 0)
                basic.pause(5000)
            }
        }
    }
})
input.onButtonPressed(Button.A, () => {
    status = statusRunning
    dailyCounter += 1
    pomodoroSeconds = 25 * 60
    basic.clearScreen()
    basic.showNumber(dailyCounter)
    plotMinutes = pomodoroSeconds / 60
    // plot one led for each minute
    for (let index42 = 0; index42 <= plotMinutes - 1; index42++) {
        plotxy = index42
        led.plot(plotxy % 5, plotxy / 5)
    }
})
input.onButtonPressed(Button.B, () => {
    if (status != statusRest) {
        pomodoroSeconds = 0
    }
    status = statusRest
    pomodoroSeconds += 5 * 60
    pomodoroSeconds = Math.min(pomodoroSeconds, 25 * 60)
    basic.clearScreen()
    plotMinutes = pomodoroSeconds / 60
    // plot one led for each minute
    for (let index44 = 0; index44 <= plotMinutes - 1; index44++) {
        plotxy = 24 - index44
        led.plot(plotxy % 5, plotxy / 5)
    }
})
index4 = 0
blinkToggle = true
index = 0
statusRunning = 1
statusRest = 2
status = statusIdle
pomodoroSeconds = 0
plotMinutes = 0
dailyCounter = 0
led.setBrightness(150)

