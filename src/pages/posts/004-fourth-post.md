---
title: "Debunking Myths: Tor - VPN"
date: 2019-07-06 05:00:00
author: "Alvaro Serrano"
image: ../../images/tor.jpg
tags:
  - Code
  - Hacking
  - Privacy
  - Tor
  - Anonymous
---

The Tor network is a free and decentralized service that was designed to protect the anonimity and privacy of its users.

Tor works by sending your network traffic over thousands of voluntarily run nodes. Every time you connect to Tor, it will build a path of encrypted layers using 3 nodes. The entry node will see your IP address, but does not see the destination of your connection. The middle node can determine where its traffic came from and where it goes to, but it can't see neither your IP address nor the domain you are trying to access. Finally, the exit node will forward your traffic to the destination domain.

It is important to note that you will stick to your entry node for 2/3 months, while the middle and exit node will be randomly chosen from the Tor nodes.

There is the common misconception that, since the US government provides funding for the Tor project, they could have a back door and even have people on a watch list. This idea does not hold because the US government uses Tor to hide its activities online and, if it had a back door, it would not be safe for them to use. Also, analysis shows that around 2 million users access Tor each day. This number is big enough as to justify targeted surveillance. If someone wanted to de-anonimyze people, this person should have control over both the entry and the exit node of a Tor user. In this situation, since the entry node is changed every 2/3 months, it would be too expensive to keep your nodes running for at least 2 months before they get another chanfe of becoming the entry node.

The belief that the exit node can access your traffic is partially true. Your traffic is encrypted while entering and travelling through the Tor network, but the connection between the exit node and the website is not. However, the implementation of HTTPS makes that the exit node can only see an encrypted HTTPS packet that needs to be forwarded.

Another myth is that people use Tor to access the dark web. The truth is that if Tor was to be taken away, these criminals would end up using another medium to conduct their businesss. It is a reality that certain individuals hide illegal websites, and many of them have been caught doing it. In spite of this, in each and every of these cases, Tor was not the primary cause. This means that even if you get access to an anonymous connection, we must take into account other factors such as software bug, government infiltrations, human erros, data leaks...
