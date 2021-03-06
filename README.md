# Domato Timer
A pxt-microbit timer for the Pomodoro Techinque®

# How it works
Microbit has 25 leds and 2 buttons, an ideal platform to realize a pomodoro-like timer.

When just started, the display shows a welcome screen with a triangle.

<img src="https://github.com/wbigger/domato-timer/blob/master/screenshots/Screen%20Shot%202017-05-17%20at%202.31.12%20PM.png" width="256">

Clicking on the A button (on the left), you start a pomodoro. Just after the click, for a few moments the display show you the number of this pomodoro (since the last reboot).

<img src="https://github.com/wbigger/domato-timer/blob/master/screenshots/Screen%20Shot%202017-05-17%20at%202.39.50%20PM.png" width="256">

Then the pomodoro starts. Each led is a minute, and at the very beginning all the leds are turned on. Every minute, a LED goes off.

<img src="https://github.com/wbigger/domato-timer/blob/master/screenshots/Screen%20Shot%202017-05-17%20at%202.37.33%20PM.png" width="256">

During the last minute, the last led blinks, to catch the attention of the user. Note that since Microbit does not have a loud speaker, blinking is the easier way to catch attention. And it doesn't bother your room mate :)

When the pomodoro ends, a confirmation screen is shown. Again, blinking.

<img src="https://github.com/wbigger/domato-timer/blob/master/screenshots/Screen%20Shot%202017-05-17%20at%202.32.33%20PM.png" width="256">

At any moment you can press the B button (on the right) to start a break. Leds during the break are shown in the lower part of the microbit, to easily distinguish work and break time at a glance.

<img src="https://github.com/wbigger/domato-timer/blob/master/screenshots/Screen%20Shot%202017-05-17%20at%202.37.43%20PM.png" width="256">

Each time you press the B button, you add 5 minutes to the break. That is, if you want to start a long break of 15 minutes, just press the B button three times.

When the break ends, a blinking confirmation screen is shown, with the shape of a diamond.

<img src="https://github.com/wbigger/domato-timer/blob/master/screenshots/Screen%20Shot%202017-05-17%20at%202.32.50%20PM.png" width="256">

That's all! Enjoy!

# Tips
If you want to align the shown number of the current pomodoro with your daily counter, at the very beginning of a pomodoro you can press multiple time the A button. Note however that if you press the same button during a pomodoro, the counter will be *not* increased, because restarting a running pomodoro makes it void, according with the official recommendations.

## Compliance with official recommendations
According to The Pomodoro Technique book, v1.3, paragraph 3.10, there are a number of recommendations for a pomodoro to be effective. I followed these recommendations when designing the Domato-Timer:

* to start a new pomodoro requires an explicit action of the user, i.e. press a button, as declaration of user determination to start working on the activity
* clearly show how much time is left

Since Microbit doesn't have a speaker, Domato does not make any ticking sound as time passes. I didn't replace this tick feature using leds, because it would have been too distracting.

When time is up, Domato uses LED blinking to catch the attention of the user.


# Source code
You can find the javascript source code of this project in the src folder. This is a screenshot of how the block editor looks like:

<img src="https://github.com/wbigger/domato-timer/blob/master/screenshots/code.png">

To see the code on your PXT/Microbit editor, you have two possibilities:
* import the .hex file of this project into PXT (you can find the .hex file in the target directory)
* create a new project, switch to the javascript editor, than copy-paste the javascript source code.

# About the name
Domato is a wordplay between the translation of tomato in turkish (_domates_) and the word tomato itself. It is a small contribution to denounce the block of Wikipedia site in Turkey and other censorship actions.


# Makecode version
This is the about page of the Makecode site that was been used to make this project.

Note: Makecode is the new name of the pxt site.

```
About makecode.microbit.org
A Blocks / JavaScript code editor for the micro:bit powered by Microsoft MakeCode.

makecode.microbit.org version: 0.12.40

Microsoft MakeCode version: 0.12.94

C++ runtime version: v2.0.0-rc11
```

# Trademarks
All product names, logos, and brands are property of their respective owners.
