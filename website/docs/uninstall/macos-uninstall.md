---
sidebar_position: 119
title: MacOS
description: How to uninstall Podman Desktop and Podman on macOS.
tags: [podman-desktop, uninstall, macOS]
keywords: [podman desktop, containers, podman, uninstall, macOS]
---

# Uninstall Podman Desktop on macOS

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

1. Remove all Podman machines:
   ```sh
   $ podman machine reset -f
   ```
1. Perform one of the following steps based on your installation:
   - If you have installed Podman using `brew`, run the following command:
     ```sh
     $ brew uninstall podman
     ```
   - If you have installed Podman using the Podman Desktop setup, run the following commands one by one:
     ```sh
     $ sudo /opt/podman/bin/podman-mac-helper uninstall
     $ sudo rm /etc/paths.d/podman-pkg
     $ sudo rm -rfv /opt/podman
     ```
1. Remove the Podman files and configurations:
   ```sh
   $ rm -rf ~/.local/share/containers/podman
   $ rm -rf ~/.config/containers/podman
   ```
1. Optional: Delete storage configuration:
   ```sh
   $ rm -rf ~/.local/share/containers/storage
   ```

### Uninstall Podman Desktop

1. Perform one of the following steps based on your installation:

   - If you have installed Podman Desktop using `brew`, run the following command:
     ```sh
     $ brew uninstall podman-desktop
     ```
   - If you have installed Podman Desktop using the `.dmg` file, perform the following steps:
     1. Locate the Podman Desktop `.dmg` file.
     1. Drag the Podman Desktop icon and drop it to the trash folder.

1. Remove the Podman Desktop configuration files:
   ```sh
   $ rm -rf ~/.local/share/containers/podman-desktop
   ```
