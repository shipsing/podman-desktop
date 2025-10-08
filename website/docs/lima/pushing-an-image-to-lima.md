---
sidebar_position: 5
title: Pushing an image
description: Pushing an image to your Lima cluster
keywords: [podman desktop, podman, containers, images, pushing an image, kubernetes]
tags: [pushing-an-image, lima]
---

# Pushing an image to your local Lima-powered Kubernetes cluster

With Podman Desktop, you can push an image to your local Lima-powered Kubernetes cluster.

#### Prerequisites

- [You onboarded a container engine](/docs/containers).
- [You onboarded a Lima cluster](/docs/lima).
- [You have set your Kubernetes context to your local Lima-powered Kubernetes cluster](/docs/kubernetes/existing-kubernetes).
- Your image is available on the **Images** page: `<my_image>:<my_tag>`.

#### Procedure

1. Go to **Images** from the left navigation pane.
1. Click the **overflow menu** icon corresponding to the image you want to push and select **Push image to Lima cluster**. A successful operation notification opens.
   ![pushing an image to Lima](img/push-image-to-lima.png)
1. Click **OK**.

#### Verification

Lima enables you to list loaded images:

```shell-session
$ LIMA_INSTANCE=<name> lima sudo crictl images
```

You can also create a pod that uses the loaded image:

1. Go to **Pods** from the left navigation pane.
1. Click **Podman Kube Play**, and provide the following details:
   - **Kubernetes YAML file**: Click `Create file from scratch`, and use the following code for file creation:

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

     Ensure to replace the placeholders:
     - Pod `name` and container `name` values must consist of lowercase alphanumeric characters, '-', or '.', and must start and end with an alphanumeric character.
     - Container `image` value is the image you pushed. You can click the name of the image to check its name and tag.

   - Optional: Select the checkbox to enable a build process inside your pod.

     :::note

     Building inside a pod helps you to isolate the build environment completely and enhance security by containing vulnerabilities or malicious code within the isolated environment.

     :::

1. Click **Play Custom YAML**.
   ![Play Custom YAML button](img/create-pod-from-kube-yaml.png)
1. Click **Done**.
1. Go to **Kubernetes > Pods**, and view the created pod `verify-my-image`. The pod **STATUS** is **RUNNING**.
   ![play a Kubernetes YAML](img/verify-my-image-pod-running.png)
