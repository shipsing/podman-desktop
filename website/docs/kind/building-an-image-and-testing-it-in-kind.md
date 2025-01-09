---
sidebar_position: 10
title: Building and testing an image
description: Building an image and testing it in Kind
keywords: [podman desktop, podman, containers, pods, migrating, kubernetes, kind]
tags: [migrating-to-kubernetes]
---

# Building an image and testing it in Kind

With Podman Desktop, you can build an image with your container engine, and test it in your local Kind-powered Kubernetes cluster.

#### Prerequisites

- [You onboarded a container engine](/docs/containers).
- [You onboarded a Kind cluster](/docs/kind).
- [You have set your Kubernetes context to your local Kind-powered Kubernetes cluster](/docs/kind/working-with-your-local-kind-cluster).
- A container definition file: `Containerfile` or `Dockerfile`.

#### Procedure

1. Build your image:

   1. Go to **Images** from the left navigation pane.
   1. Click **Build**.
   1. Provide the relevant details to build the image. For example, enter image name as `my-custom-image`.
   1. Click **Build**. Wait for the image build to finish.
   1. Click **Done** to return to the Images page.

1. Push your image to your Kind cluster:

   1. **<Icon icon="fa-solid fa-cloud" size="lg" /> Search images**: enter your image name `my-custom-image` to find the image.
   1. Click the **overflow menu** icon and select **Push image to Kind cluster**. A successful operation notification opens.
   1. Click **OK**.

1. Test your image by creating a container:

   1. Click the **Run Image** icon corresponding to the image `my-custom-image`.
   1. **Container name**: enter `my-custom-image-container`.
   1. Review the parameters that Podman Desktop has detected from your image definition or edit them, if required.
   1. Click **Start Container**.

1. Test your image and container on your Kind cluster:

   1. **<Icon icon="fa-solid fa-cloud" size="lg" /> Search containers**: enter `my-custom-image-container` to find the running container.
   1. Click **<Icon icon="fa-solid fa-ellipsis-v" size="lg" /> > <Icon icon="fa-solid fa-rocket" size="lg" /> Deploy to Kubernetes** to open the **Deploy generated pod to Kubernetes** screen.
   1. **Pod Name**: keep the proposed value `my-custom-image-container-pod`.
   1. **Use Kubernetes Services**: select **Replace `hostPort` exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use `hostPort`.**
   1. **Expose service locally using Kubernetes Ingress**: if your container is exposing at a port, select **Create a Kubernetes ingress to get access to the ports that this pod exposes, at the default ingress controller location. Example: on a default Kind cluster created with Podman Desktop: `http://localhost:9090`. Requirements: your cluster has an ingress controller`**.
   1. Optionally, if your container is exposing more than one port, select the port to expose.
   1. **Kubernetes namespaces**: select `default`.
   1. Click **<Icon icon="fa-solid fa-rocket" size="lg" /> Deploy**.
   1. Wait for the pod to reach the state: **Phase: Running**.
   1. Click **Done**.

#### Verification

1. The **<Icon icon="fa-solid fa-cubes" size="lg" /> Pods** screen lists the running `my-image-container-pod` pod.
1. Click on the pod name to view details and logs.
1. Optionally, if your container is exposing a port, go to `http://localhost:9090`: your application is running.
