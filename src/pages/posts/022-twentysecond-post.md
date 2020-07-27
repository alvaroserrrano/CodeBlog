---
title: "12 factor applications"
date: 2020-07-13 09:00:00
author: "Alvaro Serrano"
image: ../../images/12factorapp.png.
tags:
  - Code
  - Software
  - AWS
  - Cloud Computing
___

As software as a service becomes the mainstream model of modern web applications, the 12 factor methodology keeps on imposing its logic on distributed systems and microservices architectures. This model has been such a key contribution for distributed systems, service mesh and cloud computing with microservices implementations. Every developer and cloud architect will benefit from knowing the underlying principles behind this model.

* Automation through declarative (you decide what resourcesto use and how to manage them) helps to minimize time and cost for new developers joining the organization or project
* Web apps should enforce portability by keeping the underlying server Operating System as clean as possible
* Cloud platforms minimize divergence between staging and production environment, thus enforcing continuos deployment for Agile teams.
* This model offers the possibility to scale up without downtime or significant changes affecting development or architecture resources.

Here are the 12 factors that help us to leverage such a model
* A single codebase with multiple deployments
* Explicit declaration of isolated dependencies
* The environment must contain the configuration of the application
* Backing services should be attached as application resources
* Builds, releases and deployments must be viewed as separate components of a CICD pipeline
* Apps should be execute as one or more stateless process
* Services should be exposed via port-bindings
* Development and Production environment should be as similar as possible
* Logs must be treated as event streams
* Admin and management processes should be viewed as one-off processes
* Concurrency is ideally enforced scaling out via the process model
* Achieve fast startup and graceful shutdown
