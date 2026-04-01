---
title: "Sanremo YOU: Common Behaviors & Solutions"
meta_title: "Sanremo YOU: Common Behaviors, Solutions, and Troubleshooting"
description: "A list of common behaviors and solutions when using the Sanremo YOU espresso machine with BeanConqueror, including solutions for brew by weight and connection issues."
date: 2026-04-01T20:00:16Z
categories: ["Hardware", "Sanremo YOU"]
author: "Lars Saalbach"
draft: false
---

We know there are maybe some common behaviors and quirks when using the Sanremo YOU with BeanConqueror, so we want to provide a helpful list and solutions:

### 1. My brew by weight stopped way before programmed
This may be the situation because the volumetric hit before. Please adjust your volumetric higher. It's better to go with a high value at the start and adjust it afterwards. The volumetric limit will currently cut the brew by weight.

### 2. My shot stopped, but restarted again by BeanConqueror
This is a difficult one. If your volumetric is perfectly aligned with the brew by weight, BeanConqueror stops, and depending on the phase, the Sanremo YOU starts the shot again. The solution is (currently): Set the volumetric a way higher (ideally 10ml higher, for example).

### 3. The bluetooth-icon on the Sanremo stays active even so nothing is connected
This is most likely a UI bug on the machine. If you can connect again afterwards, everything should be fine. Otherwise, please see our troubleshooting guide: [I can't connect to the Sanremo YOU](/blog/cant-connect-sanremo-you/).

### 4. Learning algorithms for Brew by Weight
This feature is just given for the Baristamode. For normal brew-tracking, you'd need to adjust it yourself.

### 5. My shot should be stopped, but it just kept running
This is mostly due to a situation where BeanConqueror sends the stop signal to the Sanremo YOU, but the connection was momentarily lost. Therefore, the stop command is not executed, and reconnecting to the WebSocket takes multiple seconds.
You can verify if this error occurred by checking the logs after the shot. Make sure to stop the shot yourself.

If this happens, please send us the logs so we can have a look. For instructions on how to do this, please refer to: [I can't connect to the Sanremo YOU: Send Us the Logs](/blog/cant-connect-sanremo-you/#7-send-us-the-logs).
