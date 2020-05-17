---
title: "Paralellism != Concurrency"
date: 2020-05-18 07:00:00
author: "Alvaro Serrano"
image: ../../images/paral.png
tags:
  - Code
  - Software
  - Paralell Computation
  - Paralell Programming
---

Paralell Programming always seems to be an esoteric topic whose complexity does not actually represent the general case of computing. Whenever we hear about paralell programming our mind is flooded with extremely difficult programming paradigms that result from deadlocks, monitors, mutual exclusion... As a consequence we tend to associate 2 concepts that are closely related but that are not the same. As the title states, paralellism and concurrency are 2 different concepts.

First of all, paralellism has nothing to do with concurrency. In fact, paralellism involves a nondeterministic composition of programs that results in a deterministic behavior. This end result can be achieved through different methods and we want to explore all of the available alternatives to our advantage. On the other hand, concurrency is all about managing the unmanageable (events start arriving for reasons beyond our control and we must react to them).

And yes, concurrentcy is a requirement for paralellism. However, concurrency is also a requirement for serialization and sequential programs. Indeed. the timing signal on a processor chip also acts as a synchronization mechanism that we have to coordinate with other processing units. The point is that, even if we have to deal with concurrency, it is not relevant for the implementation of a paralell computation.

In paralell programming, rather than focusing on the exact order in which tasks will be executed, we think in terms of dependencies among operations and we assign a cost to the steps of the program that we are actually writing. This means that we should not bother thinking about how to schedule the workload onto processors. Instead, we should think about the dependencies among the different stages of a large computation.

Think about it in terms of functional programming where we transform a given sequence into another sequence, but the original sequence is not being destroyed. Therefore, we need not worry about the interference between 2 different operations. All that we care about is that we can run those operations in paralell.

To put it in a nuthsell, functional programming is one oof the fundamental pillars of paralell programming. The one reason is that the fewer dependencies we have, the more opportunities for paralellism can be exploited.
