---
title: "Frontend Security"
date: 2020-05-10 05:00:00
author: "Alvaro Serrano"
image: ../../images/frontend-sec.jpg
tags:
  - Code
  - Software
  - Security
  - Frontend
  - Cybersecurity
  - React
---

Whenever I am developing a full stack application and it is time to move on to work on the frontend, I must admit that, like the majority of frontend developers, end up focusing way too much on accessibility, SEO, performance, user experience, responsiveness... There are too many things to keep mind that we often forget about security.

The fact that sensitive data is stored in the backend does not mean that it is the server-side team's responsibility to take on all of the significant measures to secure the company's servers. In fact, the front-end holds the keys that give access to the backend warehouse. Despite the variety of attack vectors that exist, we are lucky enough that a few properly configured response-header and good coding practices can save us more a fair amount of time.

1. SecurityHeaders.com is to security what LightHouse is for performance. This website provides useful measurements that give us an idea about the strength of our site's security headers. Also, keep in mind that as we progress towards a serverless future, it is our responsibility to configure our headers according to our cloud hosting provider specifications.

2. Keep a strong Security Content policy to detect and mitigate cross-site scripting, clickjacking and code injection attacks. A good CSP policy can disable harmful code injections and restrict external domains that may load external resources onto your application. Do not forget to enable the CSP by setting an appropriate list of directives. For example, if your site does not rely on any other external site, your CSP header might look like:
   `Content-Security-Policy: default-src 'none'; script-src 'self'; img-src 'self'; style-src 'self'; connect-src 'self';`
   You still might want to allow certain trusted domains such as AWS S3 buckets, Google Fonts... Learn more on [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy?ref=hackernoon.com "MDN").

3. Disable iframe embedding to prevent clickjacking attacks. This will disallow attacks where users are tricked into performing some action on another website by embedding that sire into an invisible iframe that is placed under the user's cursor while he/she is in your site. Therefore, the user thinks that he is browsing your site, but in reality they are performing some action on another website. This attack can be avoided by providing the X-Frame-Options header, which will prohibit rendering of website in a frame.
   `"X-Frame-Options:" "DENY"`

4. Restrict access to browser features and external APIS that are not needed for proper use of your website.
   `"Feature-Policy": "accelerometer 'none'; ambient-light-sensor 'none'; autoplay 'none'; camera 'none'; encrypted-media 'none'; fullscreen 'self'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; picture-in-picture 'none'; speaker 'none'; sync-xhr 'none'; usb 'none'; vr 'none';"`

5. Do not trust your users. They might inject unfiltered code through DOM APIs on input fields, URL parameters, local storage entries... All user input should be sanitized.

6. Make sure that your dependencies are up to date by performing regular vulnerability checks. Tools like Dependabot or Snyk are quite useful for this matter since they do automatic pull-requests to your repository for out-of-date or potentially vulnerable dependencies.

7. Be aware of what third party services you are integrating to your site because they might get compromised. Most of the popular services have documented what CSP directives they require, so make sure to follow their guidelines.
