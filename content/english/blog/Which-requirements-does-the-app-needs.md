---
title: "Which requirements does the app needs?"
meta_title: "App Permissions"
description: "this is meta description"
date: 2025-02-03T10:00:00Z
image: ""
categories: ["Application"]
author: "Lars Saalbach"
tags: ["app permissions"]
draft: false
---

The app needs access to your filesystem as well as the camera

- Filesystem: Beanconqueror writes data to his own application directory, on Android aswell as on iOS, no where else (Images, Brew Graphs, Backup files, etc)
   - Due to changes, the file system access is handled on Android differently, we’re using the file-picker which you choose, or also referencing to the Camera.
     There is no interaction with your “normal” filesystem without a specific wanted user action.

- Camera: Deactivated by default. Need to be granted, when taking a first picture or accessing the photo library to set images for beans, brews and so on.
- Internet: Not needed. If you want to import roaster information, interact with supported portafilters or  e.g. want to send me some analytics information to make the app better, you’d need to activate the internet/wifi
- GPS: Deactivated by default. Need to be granted through the settings and when doing the first brew with this setting activated to save the brewing location
- Apple Health: Deactivated by default. Need to be granted through the settings, to save caffeine amount (just on iOS)
- Wake look: Deactivated by default. Activated through settings, won't let your phone get into sleep mode while brewing
- Bluetooth: Deactivated by default. Need to be granted, when using bluetooth devices (scale, pressure, refractometer, thermometer).
- NFC: Deactivated by default. Need to be granted when you want to scan or write NFC-Tags
