---
sidebar_position: 10
title: Pushing an image
description: Pushing an image to your Kind cluster
keywords: [podman desktop, podman, containers, images, migrating, kubernetes]
tags: [migrating-to-kubernetes, images]
---

# Pushing an image to your local Kind-powered Kubernetes cluster

With Podman Desktop, you can push an image to your local Kind-powered Kubernetes cluster.

#### Prerequisites

- [You onboarded a container engine](/docs/containers).
- [You onboarded a Kind cluster](/docs/kind).
- [You have set your Kubernetes context to your local Kind-powered Kubernetes cluster](/docs/kind/working-with-your-local-kind-cluster).
- Your image is available on the **Images** page: `<my_image>:<my_tag>`.

#### Procedure

1. Go to **Images** from the left navigation pane.
1. Click the **overflow menu** icon corresponding to the image you want to push and select **Push image to Kind cluster**.
   ![pushing an image to Kind](img/pushing-an-image.png)

1. Optional: If you created multiple Kind clusters, select the right Kind cluster from the context dropdown list.
   ![selecting a Kind cluster](img/pushing-an-image.png)
   A successful operation notification opens.
1. Click **OK**.

#### Verification

Kind does not enable you to list loaded images.
Therefore, create a pod that uses the loaded image.

1. Create a `verify_my_image.yaml` Kubernetes YAML file on your workstation.
   Replace the placeholders:

   - Pod `name` and container `name` value must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character.
   - Container `image` value is the image you pushed.

   ```yaml
   apiVersion: v1
   kind: Pod
   metadata:
     name: <verify-my-image>
   spec:
     containers:
       - name: <my-image>
         image: <my_image>:<my_tag>
         imagePullPolicy: Never
   ```

1. Open **<Icon icon="fa-solid fa-cubes" size="lg" /> Pods > Play Kubernetes YAML**.
   1. **Kubernetes YAML file**: select your `verify_my_image.yaml` file.
   1. **Select Runtime**: **Using a Kubernetes cluster**.
   1. Click **Play**.
   1. Click **Done**
1. Open **<Icon icon="fa-solid fa-cubes" size="lg" /> Pods**.
1. **<Icon icon="fa-solid fa-search" size="lg" /> Search pods**: `<verify-my-image>`.
1. The pod **Status** is **Running**.
