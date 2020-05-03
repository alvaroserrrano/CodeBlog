---
title: "Deployment Pipelines in 2020"
date: 2020-01-09 05:00:00
author: "Alvaro Serrano"
image: ../../images/deployment.jpg
tags:
  - Code
  - Software
  - Deployment
  - CI/CD
---

In 2020, implementing Agile methodologies while ensuring continuous integration and continues deployment requires a careful balance of speed, team-work and reliability. A successful team will be able to iterate with fast feedback loops that are responsive to customer feedback. Dealing with the difficulties that come with continual refinements of deployment systems in order to accomodate for the growth of a company is not an easy task.

Every pull request must be carefully examined, reviewed and successfully pass all tests. Once those conditions are met, an engineer can merge their code into master. However, it is interesting to note that big companies like Slack implement policies like only merging code during North America business hours. This is done to make sure that the company is fully staffed for unexpected problems.

Slack's deployment policies are among the most interesting ones to watch out for. For instance, they have about 12 scheduled deploys and, during each deploy, one engineer is designated and the deploy commander. This person is in charge of rolling out the new build to production. Therefore, this is a multistep process that guarantees that builds are rolled out slowly, thus ensuring error detection before they affect everyone. As a consequence, this gives them not only the possibility to roll back whenever there is a spike in errors, but also to implement hotfixes if they detect a problem after release.

Their workflow follows a 4-step process:

1. Create a release branch
   ... This is a point in history where we can tag a release and cherry-pick hotfixes for issues that may come up during a rollout to production
2. Deploy to a staging area
   ... In this phase we can deploy a temporary build and run our tests without affecting public traffic
3. Rollout to production
   ...Once we are sure that core functionality is not negatively impacted, we can rollout to production
4. Percentage-based rollout to production
   ...If our performance remains stable and there are no outstanding alerts, we rollout is broken up in 10, 25, 50, 75 and 100 percent increments in order to progressively expose the new build while analyzing any spikes or possible anomalies

The biggest advantage of such workflow is that there will always a deploy commander ready to react quickly to any issues that may arise. This person will identify the pull request that is causing the actual problem, revert it, cherry-pick in that rever, and make a new build.

What if they do not catch an error before it reaches production? Under these circumnstances the company restores the servive and they roll back to a previous working build.

It is worth noticing the speed of the deploys at such a big company. As a matter of fact, a small company could simply run an entire application on a few Amazon EC2 instances and do a quick rsync to all the servers with just one tier before production. That is, they could just verify a build on the staging phase.

However, as the number of customer grows, the amount of infrastructure required needs to scale properly. Such conditions would force any company to leave behind a push-based deploy model that will not be able to deal with the amount of new servers that will get added. This is because of the increased deploy time that will take place every time a new machine is added.

This is where a paralell pull-based system comes into play. Instead of pushing code using sync scripts, each server pulls the build concurrently when signaled by a Consul key change
