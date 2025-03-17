---
sidebar_position: 118
title: Windows
description: How to uninstall Podman Desktop and Podman on Windows.
tags: [podman-desktop, uninstall, Windows]
keywords: [podman desktop, containers, podman, uninstall, Windows]
---

# Uninstall Podman Desktop on Windows

Uninstalling Podman Desktop does not automatically remove the created Kubernetes clusters, Podman, or other resources. To uninstall Podman Desktop, perform the following tasks:

1. Optional: Remove cluster resources
1. Uninstall Podman
1. Uninstall Podman Desktop

## Optional: Remove cluster resources

- For Kind, use the UI to [delete the Kind cluster](/docs/kind/deleting-your-kind-cluster) or run the `kind delete clusters --all` command.
- For Minikube, run `minikube delete` and then remove the `~/.minikube` folder.

  :::note

  You can find the installed binaries and plugins for Podman Desktop at `~/.local/share/containers/podman-desktop/extensions-storage/`, and you may delete them if necessary.

  :::

## Uninstall Podman

You can delete all pods, containers, and images by removing the Podman machine.

1. Stop and remove the Podman machine using the PowerShell:
   ```sh
   $ podman machine stop podman-machine-default
   $ podman machine rm -f podman-machine-default
   ```
1. Uninstall Podman from the Start menu, Settings, or Control Panel. For more details, see the [resource](https://support.microsoft.com/en-us/windows/uninstall-or-remove-apps-and-programs-in-windows-4b55f974-2cc6-2d2b-d092-5905080eaf98).
1. Remove Podman files and configurations:
   ```sh
   rm -rf ~/.local/share/containers/podman
   rm -rf ~/.config/containers/
   rm -rf ~/AppData/Roaming/containers
   ```

## Uninstall Podman Desktop

1. Choose an uninstall method based on how Podman Desktop was installed and perform the necessary step:

   <details>
   <summary>
   uninstall methods:
   - Installer
   - Chocolatey
   - Scoop
   - Winget
   </summary>

   #### Installer

   - Uninstall Podman Desktop from the Start menu, Settings, or Control Panel. For more details, see the [resource](https://support.microsoft.com/en-us/windows/uninstall-or-remove-apps-and-programs-in-windows-4b55f974-2cc6-2d2b-d092-5905080eaf98).

   #### Chocolatey

   - Run the following command:

     ```shell-session
     > choco uninstall podman-desktop
     ```

   #### Scoop package manager for Windows

   - Run the following command:

     ```shell-session
     > scoop uninstall podman-desktop
     ```

   #### Winget

   - Run the following command:

     ```shell-session
     > winget uninstall -e --id RedHat.Podman-Desktop
     ```

   </details>

1. Remove the Podman Desktop configuration files:
   ```sh
   $ rm -rf ~/.local/share/containers/podman-desktop/
   $ rm -rf ~/AppData/Roaming/Podman Desktop
   ```
1. Remove temporary files, caches, and blobs:
   ```sh
   $ rm -rf ~/AppData/Roaming/Podman Desktop
   ```
