---
title: "Baristamode Logic Explained (Sanremo YOU)"
meta_title: "How BeanConqueror's Baristamode Works with the Sanremo YOU"
description: "Understand the logic behind BeanConqueror's Baristamode, designed for cafes and power users pulling rapid back-to-back shots."
date: 2026-03-13T22:00:00Z
image: "/images/sanremo-you/baristamode_menu.png"
categories: ["Features", "Hardware","Sanremo YOU"]
author: "Lars Saalbach"
draft: false
---

**Baristamode** in BeanConqueror is a dedicated workflow specifically designed for baristas, cafes, or enthusiasts who want to pull multiple shots back-to-back without the need to manually track and log every single espresso. 

This feature fully integrates the smart capabilities of your Bluetooth scale with the WiFi control of your espresso machine, delivering a highly efficient brew-by-weight experience.

## The Dual Connection

Baristamode leverages two distinct connections simultaneously:
1. **Bluetooth Connects to the Scale:** BeanConqueror talks continuously to your connected smart scale, receiving real-time weight data in the background.
2. **WiFi Connects to the Machine:** BeanConqueror maintains an active WiFi connection to the Sanremo YOU, allowing it to monitor the machine's state and send stop commands.

## The Workflow

The intent of Baristamode is seamless automation. You don't need to touch your phone or the BeanConqueror app between shots. 

1. **Start the Shot:** When you press one of the designated shot buttons on the Sanremo YOU—**P1, P2, P3, or M (Manual)**—BeanConqueror instantly receives a notification that a shot has started. *(Note: BeanConqueror explicitly ignores the Paddle or Purge buttons to prevent accidental triggers).*
2. **Real-time Monitoring:** As the shot pours, BeanConqueror checks the scale's current weight.
3. **The Stop Signal:** Using the foundational [Brew By Weight](/blog/brew-by-weight/) logic, BeanConqueror calculates the exact moment to send the stop command back to the Sanremo YOU over WiFi.

## The Learning Algorithm

Espresso doesn't stop instantly; there is always a residual lag time between the command to stop the pump and the final drops hitting the cup. 

Baristamode utilizes an intelligent learning algorithm to perfect this offset over time. 
* BeanConqueror uses a "residual lag time" variable, which starts at **0.9** and adjusts automatically after each shot based on the behavior of the specific control (P1, P2, P3, or M) that was used.
* **Higher values** mean the command is sent earlier (stopping the shot sooner).
* **Lower values** mean the command is sent later (stopping the shot closer to the target weight).

After 2-3 consecutive shots using the same grind setting, flow rate, and coffee beans, the algorithm dials in this offset, bringing your final yield incredibly close to perfection every single time.

### Limitations: Turbo Shots
Because the learning algorithm relies on a predictable flow rate to adjust the residual lag time, extremely fast extractions like **Turbo Shots** are not natively supported by this logic. The flow rate is simply too rapid for the algorithm to accurately predict and counter the lag.

## Compatible Equipment

For Baristamode to function, you need a smart scale capable of rapid weight transmission via Bluetooth. Check out the complete list of [Compatible Devices](/blog/compatibel-devices/) to find the right scale for your setup.
