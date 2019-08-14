---
title: "TOR? VPNs? Proxies?"
date: 2019-08-10 08:00:00
author: "Alvaro Serrano"
image: ../../images/tor-vpn.jpg
tags:
  - Code
  - Hacking
  - Privacy
  - Tor
  - Anonymous
---

Should you combine TOR withe networks and technologies such as proxies or VPNs? Does that even have negative consequences?


Tor works by sending network traffic through 3 voluntarily run nodes. Thus, your packets will be encrypted 3 times, but each node only has the key to remove its own layer of encryption. As a consequence, Tor allows to establish a connection to a server without 3rd parties knowing the entire path of our request.


A proxy,however, acts as intermediary server for requests from our devices to other devices or services. Therefore, the proxy owner knows both, where your are connecting from (your IP address), and what you are connecting to (the destination web server). Besides, proxies do not necessarily protect your connection through SSL encryption and https protocols.


As far as VPNs go, these are the extension of a private network across a private one. VPNs are encrypted to protect the content in the private network from being accesible outside of the VPN. One example would be a connection to a corporate network over the Internet to access applications and files at your workspace. In fact, the VPNs that we usually use as customers tend to be just groups of encrypted proxied that we can pick from instead of connecting directly to destination sites. Your IP and destination will be hidden from your local network and Internet Service Provider, but not from your VPN provider. Also, remember that https is still required to hide your content from them.


We can infer that the weakness of proxies and VPNs is that our anonimity will be as strong as our providers promise. Somehow, that is the same as letting someone you don't know put a gun against your head simply because they have promised that will not pull the trigger as long as you pay them a yearly fee. TOR, on the other hand, will hide your entire path. Your trust will be distributed across different nodes. Following with the previous example, that would be as giving one person the gun, another the bullet... and without paying a dime! In fact, there are more than 6000 nodes spread across the globe.

TOR hides your IP, encrypts traffic, prevents ISP snooping, and is free to use (and consequently leaves no financial trace). It is easy to use and most censorship can be evaded using bridges. The drawbacks could be its slowliness, exit nodes could snoop http traffic, and torrenting breaks your anonimity. TOR does not have UDP support either.

VPNs are faster in general. They also hide your IP and encrypt traffuc to the VPN server, thus preventing local network and ISP snooping. However, your trust will be placed upon a single point of failure. Your provider can still see who you are and where you are going. They can even see your content when https is not enabled.

In conclusion, using both VPN and TOR is not something I would encourage doing. In this case, 2 is not better than 1. TOR is not meant to be run in conjuction of a VPN or another service. By doing so you will essentially be creating a permanent entry or exit node, which often has a money trail as well. You would be increasing your risk for no theoretical benefit.


Instead of using TOR over VPN (connect first to your VPN and then connect to TOR), you could evade censorship by using the bridged that are included in TOR, or even request another bridges, which, contrary to VPNs, do not leave a money trail. Even if you ended up on a watch list, TOR has more than 2 million users a day. Do you really believe that a $5 month VPN service would prevent you from being traced?


On the contrary, first establishing a connection to TOR before connecting to the VPN service, would allow you to reach services that are blocking TOR nodes. This setup would make it easier to access those services, but it increases your risk for not being anonymous for 2 reasons: VPN providers often know you from your money trail; and TOR splits all data streams across different circuits to prevent correlation of traffic as a means to de-anonymize user,but since all your traffic comes from the VPN provider's IP, that correlation will be a lot easier.

In conclusion, if privacy is your goal, you should generally be using TOR. After all, an IP address is just one more way to track users. We should still be careful about other threats that come in the form of fingerprinting.
