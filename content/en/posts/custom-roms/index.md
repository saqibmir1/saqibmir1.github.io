---
title: "Custom Roms"
date: 2022-01-18T18:22:23+05:30
draft: false
---

**Here's a to-the-point, no bullshit guide on why and how to install custom rom on any andorid device.**

## What is custom rom
Andorid is an open source project and every andorid smartphone company uses their own skin/ui for their phones, for example redmi uses miui, samsung uses one ui and so on to make them look diffent from their competetors. These roms are calles stock roms.

So custom is is essentially a custom skin or custom ui built and maintained by developers voluntarily.

Some well known custom roms are pixel experience, lineage os, crdroid.

## Why use custom rom
- Devs deliberately push updates that slow down your phone after a year or two of release (It's a marketing strategy)
- Stock rom comes with a lot of bloatware and telemetry enabled.
- Your phone's company will provide android and security updates only for a fixed period of time, say 2-3 years. After that, your device is discontinued.

## Prerequisites
- Download [adb and fastboot](https://forum.xda-developers.com/t/official-tool-windows-adb-fastboot-and-drivers-15-seconds-adb-installer-v1-4-3.2588979/) tools for your pc.
- Unlock bootloader. Procedure varies device to device but its simple.

- Download the rom file(zip) you want to install.

- Download any custom recovery: It is basically a 3rd party recovery environment used for formatting data, flashing img files etc Recommended: [TWRP](https://twrp.me)
- Download firmware for your device: Firmwares are provided by the comany itself so check the official website for your device.

## Installation
- Step 1:  Turn on adb debugging and connect your phone to pc using usb cabel.
- Step 2: Open terminal and start typing these commands one by one:
```shell
adb devices
adb reboot fastboot
fastboot flash <recovery.zip>
```
Your device should be in recovery mode.

- Step 3: In recovery, go to wipe>advanced wipe and delete cache,dalvik vendor, data, system.

- Step 4: Got t adb sideload and type these commands:
```shell
adb sideload <firmware.zip>
adb sideload <rom.zip>
```

- Step 5: Go to wipe again and format data and type ```yes``` to confirm
- Step 6: Reboot to system.

**Done**
