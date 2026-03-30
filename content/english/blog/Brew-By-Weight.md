---
title: "Brew By Weight Logic Explained"
meta_title: "How BeanConqueror's Brew By Weight Works"
description: "Understand the logic and calculation behind BeanConqueror's Brew By Weight feature, supporting machine integration like the Sanremo YOU."
date: 2026-03-13T20:00:00Z
image: "/images/sanremo-you/bbw.png"
categories: ["Features", "Hardware","Sanremo YOU"]
author: "Lars Saalbach"
draft: false
---

The **Brew By Weight** feature in BeanConqueror brings an unprecedented level of control and automation to your coffee brewing process. By connecting BeanConqueror directly to your smart scale and compatible espresso machines (like the [Sanremo YOU](/sanremo-you/)), the app orchestrates the perfect shot based on your target weight.

## How It Works

At its core, the Brew By Weight logic works by acting as the unified "brain" between your scale and your coffee machine.

1. **Continuous Data Stream:** Once a shot begins, BeanConqueror talks continuously to your connected smart scale. It receives the current weight in real-time, often multiple times a second.
2. **Predictive Calculation:** Espresso continues to drip from the portafilter even *after* the pump is turned off. To account for this "drip factor" or flow rate offset, BeanConqueror calculates a logical stopping point. It uses the current weight, the rate of weight increase, and your set target to accurately predict when the machine should stop.
3. **The Stop Signal:** When the calculated formula hits the exact threshold for your target weight, BeanConqueror immediately sends a stop command to the connected espresso machine (such as the Sanremo YOU).

## Benefit

This means you don't have to manually stop the machine. The flow will stop precisely when needed so that the final few drops resting in the cup bring the yield exactly to your desired extraction weight.

## Limitations: Flow Rate and Turbo/Soup Shots

Because the automated stopping calculation relies on a predictable flow rate to accurately determine the stop signal, there are limits to how fast a shot can pour.

- **Ideal Flow Rates**: The Brew By Weight logic works exceptionally well for flow rates up to about **2.5g/s**.
- **Faster Extractions**: Higher values, such as **3g/s**, can still work, but as the shot pours faster, it becomes increasingly difficult to precisely predict the target value.
- **Turbo Shots & Soup Shots**: Extremely fast extractions, like **Turbo Shots** or **"Soup Shots"**, will definitely not work well with this configuration. The flow rate is simply too rapid to guarantee a precise stop.

## Compatible Equipment

BeanConqueror supports a wide array of smart scales that can provide the necessary real-time data to make Brew By Weight possible.

Want to know if your scale is supported? Check out our complete list of [Compatible Devices](/blog/compatibel-devices/).
