---
title: "Track and Control your brew with the Sanremo YOU"
meta_title: "Track and Control your brew with the Sanremo YOU"
description: "Learn how to track and control all your brews via your Sanremo YOU and a Bluetooth scale, understanding each measured detail."
date: 2026-03-28T09:00:00Z
image: "/images/sanremo-you/beanconqueror_sanremo_add_brew.png"
categories: ["Hardware", "Sanremo YOU"]
author: "Lars Saalbach"
draft: false
---

If you have added the Sanremo YOU preparation method and linked it via WiFi (check out how to connect it [here](/blog/baristamode-sanremo-you)), you can either use the [Baristamode](/blog/baristamode-sanremo-you), or track all your individual brews assigned to your favorite beans and understand every measured detail.

### Important Prerequisites

Before you start, there are two crucial requirements:

1. **Bluetooth Scale:** You need a supported Bluetooth scale connected to BeanConqueror.
2. **Keep the App Active:** Just like in Baristamode, the BeanConqueror app **must** remain in the foreground. You cannot lock your device, because the mobile operating system (iOS/Android) will send the app to sleep mode, cutting off the connection and control over your Sanremo YOU.

---

### Step-by-Step Process

#### 1. Start a New Brew
Open BeanConqueror and begin a new brew setup. 

{{< image src="images/sanremo-you/beanconqueror_sanremo_add_brew.png" alt="Start a new brew" >}}

#### 2. Choose the Mode
Select how you want to interact with your Sanremo YOU during this brew.

{{< image src="images/sanremo-you/beanconqueror_choose_mode.png" alt="Choose mode" >}}

#### 3. Set Target Weight (If controlling the shot)
If you did not select **"Listening"** mode, but instead want BeanConqueror to actively control your shot (e.g., using **Manual Control**, **Profile P1**, **P2**, or **P3**), you will need to enter your desired target weight.

> [!WARNING]
> Ensure you input a target weight **greater than 0**. Otherwise, BeanConqueror will not know when to stop the shot automatically!

{{< image src="images/sanremo-you/beanconqueror_add_target_weight.png" alt="Set target weight" >}}

---

### Starting the Brew

Depending on the mode you selected, the brewing process slightly differs:

#### Option A: "Listening" Mode

1. Press the **Start** icon in the app.
   {{< image src="images/sanremo-you/beanconqueror_start_icon.png" alt="Start icon" >}}
2. Now, manually start your shot on the machine by pressing **M, P1, P2, P3**, or using your **paddle**.
3. **Important:** BeanConqueror *will not* stop your shot automatically in this mode. You will need to stop it manually. BeanConqueror will simply listen and record all data such as temperature, pressure, weight, and flow.

#### Option B: Control Mode (M, P1, P2, P3)

1. Make sure your cup is placed on your connected Bluetooth scale and that it has been **tared** beforehand (not similar to Baristamode, because here auto-taring will apply).
2. Press the **Start** icon in the application.
3. BeanConqueror will now remotely trigger the shot on your Sanremo YOU and automatically stop it once your target weight is reached.

Wait until the shot comes to an end, have a look at your beautiful brew graph, and enjoy your espresso!

---

### Brew By Weight Target Not Hit?

The difference between **Baristamode** and the normal **Tracking Mode** is how they handle the *residual lag time*. 
In Baristamode, the lag time adjusts itself automatically. This is because Baristamode assumes you are consistently using the same bean with your chosen profile, allowing BeanConqueror's algorithm to learn and adapt over multiple shots.

However, in the normal tracking mode, you will likely be using different beans, grind settings, or tools for each brew. Because of these variations, the residual lag time starts at a fixed default value of **0.9**, which has proven to deliver great results in most tests.

If you find that your final shot weight is consistently overshooting or undershooting your target, you can manually adjust this lag time:

1. Navigate to your **Preparations** and edit your Sanremo YOU device connection.
   {{< image src="images/sanremo-you/beanconqueror_device_connection.png" alt="Edit Device Connection" >}}
2. Edit the **Residual Lag Time** value.
   {{< image src="images/sanremo-you/beanconqueror_residusal_lag_time.png" alt="Edit Residual Lag Time" >}}

> [!TIP]
> - Adjusting the value **closer to 0** means the shot will stop later (resulting in a higher final weight).
> - Adjusting the value **closer to 2** means the shot will stop earlier (resulting in a lower final weight).
