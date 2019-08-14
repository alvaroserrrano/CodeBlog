---
title: "TOR? VPNs? Proxies?"
date: 2019-08-10 08:00:00
author: "Alvaro Serrano"
image: ../../images/tor.jpg
tags:
  - Code
  - Hacking
  - Privacy
  - Tor
  - Anonymous
---

Should you combine TOR withe networks and technologies such as proxies or VPNs? Does that even have negative consequences?


Tor works by sending network traffic through 3 voluntarily run nodes. Thus, your packets will be encrypted 3 times, but each node only has the key to remove its own layer of encryption. As a consequence, Tor allows to establish a connection to a server without 3rd parties knowing the entire path of our request.


A proxy,however, acts as intermediary server for requests from our devices to other devices or services
