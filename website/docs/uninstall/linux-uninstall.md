---
sidebar_position: 120
title: Linux
description: How to uninstall Podman Desktop on Linux.
tags: [podman-desktop, uninstall, linux, flathub, flatpak]
keywords: [podman desktop, podman, containers, uninstall, linux, flathub, flatpak]
---

# Uninstall Podman Desktop on Linux

Uninstalling Podman Desktop does not automatically remove the created Kubernetes clusters, Podman, or other resources. To uninstall Podman Desktop, perform the following tasks:

1. Optional: Remove cluster resources
1. Optional: Remove Podman resources
1. Uninstall Podman Desktop

## Optional: Remove cluster resources

- For Kind, use the UI to [delete the Kind cluster](/docs/kind/deleting-your-kind-cluster) or run the `kind delete clusters --all` command.
- For Minikube, run `minikube delete` and then remove the `~/.minikube` folder.

  :::note

  You can find the installed binaries and plugins for Podman Desktop at `~/.local/share/containers/podman-desktop/extensions-storage/`, and you may delete them if necessary.

  :::

## Optional: Remove Podman resources

By default, Podman is available on Linux distributions, such as CentOS Stream, Fedora, and Red Hat Enterprise Linux. However, you can remove Podman resources, including containers, pods, images, and Podman machines.

- To remove all containers, run the `podman rm -a -f` command.
- To remove all pods, run the `podman pod rm -a -f` command.
- To remove all images, run the `podman rmi -a -f` command.
- To remove all Podman machines, run the `podman machine reset -f` command.

## Uninstall Podman Desktop

1. Uninstall Podman Desktop using flatpak or flathub:

   ```sh
   $ flatpak uninstall io.podman_desktop.PodmanDesktop
   ```

1. Remove the Podman Desktop configuration folder:
   ```sh
   $ rm -rf ~/.local/share/containers/podman-desktop
   ```
