---
sidebar_position: 3
title: macOS
description: How to install Podman Desktop and Podman on macOS.
tags: [podman-desktop, installing, macOS]
keywords: [podman desktop, containers, podman, installing, installation, macOS]
---

# MacOS

This page contains information regarding installation of Podman Desktop on MacOS.

You can install Podman Desktop on macOS by using:

- The .dmg installer file
- Homebrew

  :::note

  If you have installed Podman using Homebrew and used the .dmg installer for installation, Podman Desktop notifies you of the detection of two Podman engines. To resolve this issue, go to **Settings > Preferences > Extension: Podman** and set the path to the Podman binary file that you want to use.

  :::

:::info[Prerequisite]
Podman Desktop requires [Podman Engine](https://docs.podman.io/en/latest/index.html). If you do not have Podman engine installed, Podman Desktop will prompt you to do so after installation.
:::

## Installing Podman Desktop on macOS using the .dmg file

1. Download the `.dmg` file from the [Downloads](/downloads/macos) section of the website.

   :::note

   While we recommend getting the "universal" binary file, which will work irrespective of the chip architecture your Mac possesses, you also have the option to download the applicable .dmg file depending on your Mac hardware architecture (that is, Intel or Apple M1).

   :::

1. Locate the downloaded file, and double-click on it. Usually, you will find the downloaded file in the Downloads folder.

1. Drag the Podman Desktop application and drop it to the `Applications` folder.

   ![drag and drop the Podman Desktop application](img/click-and-drag.png)

1. Start Podman Desktop from the 'Launchpad' or Mac's `Applications` directory. The Dashboard page opens with a notification to set up Podman.

1. Click **Set up** to install Podman from Podman Desktop.
   ![set up botton](img/podman-set-up-button.png)

1. Click **Next**. A confirmation notification to install Podman opens.
1. Click **Yes**. The Podman Installer screen opens.
1. Follow the instructions on the screen, enter your system password when prompted, and click **Install Software**.

   ![system passsord to install Podman](img/system-password.png)

1. Click **Close** on the screen. A page notifying that Podman has been set up correctly opens.
1. Click **Next**. A page notifying you to create a Podman machine opens.
   ![podman installed correctly notification](img/podman-installed-successfuly.png)
1. Click **Next**, and then click **Create**.
   ![notification to create a podman machine](img/notification-to-create-podman-machine.png)
1. Click **Next** to navigate back to the Dashboard page.

Podman Desktop installation is now complete. The Podman engine is installed, and the Podman machine is created. You are ready to use the application.

## Installing Podman Desktop on macOS using Homebrew

:::info[Prerequisite]

- [Homebrew](https://brew.sh/)

  :::

### Installation steps

1. Open a terminal on your Mac.
2. Run the following command:

   ```sh
   brew install --cask podman-desktop
   ```

   Homebrew will also install the Podman engine along with the Podman Desktop application in case you do not have it installed.

   After the command is executed, you can find the Podman Desktop application in the `Applications` directory of macOS.

## Getting Started

Learn more on how to get started with Podman Desktop by clicking [here](/docs/containers).
