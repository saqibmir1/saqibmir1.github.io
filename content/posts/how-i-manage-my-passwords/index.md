---
title : 'How I Manage My Passwords'
date : 2023-12-31T21:06:46+05:30
draft : false 
---

## Introduction
Here is how i manage my passwords securely.


## What I use
I use [KeePassXC](https://keepassxc.org/) which is an offline and  password manager. It is encrypted at all times and no data is stored
on remote servers. It is also cross platform and open source of course (GPLV3).


## How I Sync It Across My Devices
So one issue with this secure and offline password manager is that it doesn't sync passwords 
across devices which is their motive and its upto the user to handle their passwords. 
This is what i did
I have MEGA sync installed on all my devices and the synced folder has the database which is a kbdx file which is read by the
KeePassXC application everytime it loads. All you have to do is set the databases (existing) 
path to the ```synced_folder/passwords.kbdx``` on every machine. Now whenever you make changes (ie create, 
remove, update, delete) passwords. the passwords.kbdx file gets updated and then synced 
automatically across all your devices. It is secure because the passwords.kbdx file 
is encrypted and can only be accessed using the master password you have set.


## Bonus tips on how to make a strong passwords.
Typically, there are 2 methods of password cracking; brute force and dictionary attacks. So,

- **Pick multiple words instead of single complex word:**  ```D0egc01n#``` is a bad password
because this would get completely 
wrecked by a GPU cluster because that might be calculating as many as hundred billion hashes per
second.

- **Pick words that have less chance of being in the dictionary:** For instance ```kakarot illadelph chungus sussy baka``` is a
good password because its chance of being in a dictionary are very unlikely.

- **Dont pick words specific to you**. Social engineering, NIGGA.
