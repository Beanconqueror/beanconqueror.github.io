---
title: "Bluetooth Device Features"
meta_title: "Bluetooth Device Features"
description: "this is meta description"
date: 2025-03-01T10:00:00Z
image: ""
categories: ["Bluetooth"]
author: "Lars Saalbach"
tags: ["Bluetooth", "Features", "Device"]
draft: false
---

You can customize pretty much how your smart scale should interact with Beanconqueror and what should be done when. For this navigate to Menu -> Settings -> Bluetooth Scales / Bluetooth Pressure

The cool thing? All features are inside the Beanconqueror software, no need to buy a specific device to get these features.

## Smartscales

### Espresso - Automatically stop brew

This mode works just on a preparation method which is set to espresso.

When falling below a specific flow rate, Beanconqueror automatic stops the timer, and therefore the graph drawing.

This can be customized to a custom flow rate threshold, where you may get an minimum offset of 0.1 to 0.2 grams in the cup.

→ This feature needs to be activated in the settings.

 

### Ignore the current transfer weight.

This mode works perfect on Filter. You'll get two new buttons visible in the brew page

{{< image src="images/en/blog/bluetooth-device-features/play-listen-to-weight.png" caption="`PLAY` Start listening to weight changes" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="true" >}}

{{< image src="images/en/blog/bluetooth-device-features/pause-listen-to-weight.png" caption="`PAUSE` - Pause listening to weight changes" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="true" >}}
 

Defaults to "PAUSE" icon - Weights are streamed from the scale into the graph.

When you press "PAUSE", it will toggle to the "PLAY", and starts to ignore the weight changes incoming from the scale, and takes the last one reported. Therefore you can do shakes, swirls, lifts, removing the cup without having the weight graph goes up or down, aswell as the flow.

#### Use case (Examples)

- You brew a V60 and want to swirl
- You brew a Aeropress and want to stirr
- You brew a Aeropress and you want to remove the Aeropress from the scale to push down the plunger but you still want the whole brew-time recorded.

→ This feature needs to be activated in the settings.

### Start timer automatically?

This mode will work perfect on Filter or Espresso. You'll get a new button which will be visible on the brew page

{{< image src="images/en/blog/bluetooth-device-features/start-listen-to-weight.png" caption="`LISTENING` - Start listening" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="true" >}}

 

When you press the "LISTENING" icon, the brew timer aswell as the scale will reset, so the scale is zerod. When a first weight change is registered like a first coffee drip, or the start of the pour the timer will start automatically and starts now drawing the graph.

You can also set a minimum threshold of weight change to start, e.g. when you have a very vibrating plate and your scale will change from 0 to 0.3g frequently, you could set the threshold to 0.5g to then start the timer.

→ This feature needs to be activated in the settings.

 

### Weight doubling - 1 of 2 cups on scale

If just one cups fit on the scale, but you want to track the whole weight, you can activate this feature.
On the brew itself you can then toggle, defaults to off.

The actual incoming weight will be doubled when activated.

→ This feature needs to be activated in the settings.

 

### Graph Update Interval

Some Tablets / Phones are a bit older, and maybe don’t have such a powerful graphical unit.
When the graph refreshes the tablet / phone freezes and therefore everything will start lagging.
You can activate this feature, and set a special millisecond-delay when to refresh.
We found out that setting to like 200ms instead of 100ms, its already enough to fix lags and working as good as flawless.

IF! You don’t feel any issues, please don’t use.

→ This feature needs to be activated in the settings.

 

### Acaia Connection issues?

#### iOS

You’re Acaia is connecting and reconnecting without a stable connection?

→ Change from V2 connection mode to V1.

#### Android/iOS

You’re Acaia is connecting and reconnecting without a stable connection?

→ Try to adjust the Command Delay & Heartbeat timer

Mostly the Heartbeat timer is a crucial one, it starts with a lower number like 200ms, try to adjust to like 400-500ms.

 

### Customize your scaling process

You can define yourself which actions shall be taken when you open a new brew, start it, etc.
E.g. you can let your tare scale, when you open a new brew.
Aswell you could maximize the brew-graph when starting a new brew.

 

## Pressure device

### Start with predefined pressure

You don’t want to press play any time you start a brew, and just want to press down you’re lever?
This can be achieved with this setting.
Define your threshold, and just press down your lever.

Important! You need to have your timer set to zero (00:00).

You can also combine this, with your scaling process, so you could set your pressure threshold, and tare your scale when the timer starts, so you would not need to tare your scale.