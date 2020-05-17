---
title: "Lambda to the rescue of multi-tenant environments"
date: 2020-05-18 09:00:00
author: "Alvaro Serrano"
image: ../../images/lambda.jpeg
tags:
  - Code
  - Software
  - AWS
  - Cloud Computing
---

The architecture of the cloud is built upon a multitenant model where a single software instance provides a service for multiple tenants. Multi-tenant solutions enable growth for large businesses that keep on expanding over the years. Before the cloud, it was common for organizations to run into several problems ranging from scalability, reliability and security issued.

However, with the rise of services such as AWS Lambda, these companies have managed to solve most of their problems on their SAP systems. It turns out that multi-tenancy is a win-win situation since it creates an efficient cost-model for software and cloud vendors while providing customers with a service that allows them to deploy code without internally hosting their own data-centers.

While most of the PaaS offerings are designed to be running 24/7, Lambda is completely event-driven; it will only run when invoked. Furthermore, Lambda can instantly scale up to a large number of paralell executions. Scaling down is also handled automatically (once a function terminates, all of its associated resources are destroyed). The support for multiple languages and frameworks (Java, Go, PowerShell, Node.js, C#, Python, and Ruby) is quite usefult for operatiing serverless websites, cleaning up data, predictive page rendering based on user preferences, integration with external services, log analysis on the fly... It turns out that this service gives us an unprecendented flexibility. We can also do backend cleaning, real-time data processing, and automated backups.

Lambda should be our first alternative when it comes to performing repetitive tasks, thus allowing our services to keep performing their job (such as responding rapidly to user requests). In summary, it will offload many processes that would otherwise slow down our system.

However, we should keep in mind that there are some limitations associated with Lambda. Despite being charged only by the compute time, we should keep in mind that disk space is limited to 500 MB, memory canv ary from 128MB to 3GB and there is an execution timeout of 15 minutes for a function.

Nevertheless, we can reduce the impact of the above-mentioned limitations. For example, if we are running a lambda function for a long time, we shold consider moving it to and EC2 instance, or even to Elastic Beanstalk.

In terms of multi-tenancy, a customer should not think about how their actions might impact other tenants. However, reliability is a primary cause of concern. Take as an example a customer who runs a load test against a production endpoint and causes an outage for the rest of customers on the shared environment.

Regarding security, since customers are co-hosted on the same virtual hardware, traditional scaling techniques such as spinning up new virtual hosts, might increase the risk of a breach or cyber threat.

Even the most sophisticated cloud environment could experience a sudden spike in their traffic and the multitenant space might become overwhelmed, thus increasing latency or downtime.

Should companies pay for additional hardware even though it will be sitting idle most of the time? Or should they create an access endpoint where they can upload a ZIP file full of code that will be run via functions? In short, Lambda will provide that isolation that each tenant is looking for. Each customer will benefit from having a unique environment where all of their data will be separated from other customers and data integrity will no longer be a concern. To sum up, with Lambda, each customer will pay for the amount that they demand and use, rather than paying for the maximum amount that they might need in the worst case scenario.
