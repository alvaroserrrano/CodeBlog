---
title: "Microservices are not the latest fad... but maybe we do not need them"
date: 2020-05-25 09:00:00
author: "Alvaro Serrano"
image: ../../images/micro.png
tags:
  - Code
  - Software
  - Microservices
  - Docker
  - Kubernetes
---

Nowadays it is not uncommon to be asked about what microservices are, usually at job interviews. The answer to that should be fairly easy. Perhaps we do not provide the most technical answer that the interviewer might expect from us, but we can get through it just by recalling some experiences, talks, anecdotes... In the end, most of us are overwhelmed with success stories about microservices. Aren't they the 'panacea'?

Most of the time, after answering the above mentioned question, a software design question follows, usually entailing software architecture concepts. Back to our example the interviewer asks: 'Should we implement microservices for our solution?'

Perhaps it would be a little bit disappointing for the interviewer to hear an answer that contradicts his/her assumptions. Shouldn't we just nod in agreement and jump into the microservices wagon? What if a microservices solution was implemented in a real project without knowing its future repercussions?

My first exposure to microservices was listening to a Youtube video at x2 speed on a rainy afternoon. It felt disappointing to be presented with such a strong opinion about something that I had never heard of and that emerged a few years ago. I quickly realized about the effectiveness and the broad possibilities that such a codebase offers. By that time I was afraid of 'DevOps' technical concepts, but, at the same time, I felt intrigued about the modularity of the designs that avoided monolithically-designed software architectures.

What kind of manager, designer or engineer does not want to develop a modular solution to a large problem or application? Microservices are great for large solutions because they are just a collection of smaller independent services, each serving a different purpose. Ideally, each service would be a single application in itself. However, what if our application is not large enough as to be spliced into smaller pieces? This is just an example where, even though our codebase might eventually grow, a microservices approach will require a greater computational cost per line of code.

For instance, microservices are not that good if there is no need to scale each individual component of the application. Would it really make sense to develop a HR application and split it into microservices such as 'Employees', 'Payroll', 'Incidents and Reports'... Will those individual components really end up scaling considerably?

Let's look at another scenario where there is a need for frequent communication between services. If we had a monolithic application there would be no latency and the communication between modules would take place in memory. However, if we moved from an in-memory transaction to a network-based communication, our latency will increase. This added layer of communication could impact application that deal with real-time data-processing.

We might even take this further and analyze additional weaknesses of microservices. To name a few, there is added complexity in terms of maintaining and deploying a microservice-based application. Since we are dealing with distributed services, each service needs to be deployed to its own container. If we had a monolithic application this would be as easy as deploying over a large Virtual Machine. Besides, depending on your team, microservices have not always proven to be a feasible solution for teams with little DevOps integrations. In small companies, building a DevOps team can cause more damage than progress. The reason is that microservices cannot be maintained or monitored without a DevOps team. Also, end to end testing would require more time. Also, coping with legacy code is the bread and butter of our routinely activity as developers, which would end up deriving on more debugging distresses for our development team.

To sum up, we all love integrating the latest technologies into our projects. However, in the real world, ego is the enemy. Being too enthusiastic about a certain technology in an important decision might end up having very negative consequences for our company.
