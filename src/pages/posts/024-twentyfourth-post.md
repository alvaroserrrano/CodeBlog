***
title:"Git Strategies"
date:2020-05-10 05:00:00
author:"Alvaro Serrano"
image: ../../images/git-commands.png
tags:
    * Code
    * Software
    * AWS
    * Cloud Computing
***

##The eternal debate: Merge vs Rebase

Generally one should stick to a merge workflow unless your team opts for a
rebase workflow. Both have its advantags and disadvantages.

Rebase can even be used on merge workflow. For example, one developer pulls in
a feature into master while you are working on your own feature. In this case,
merging those files would add an extra commit for a change that one of your
teammates made. Therefore, since you want to replay your commits on top of the
new master, it could be useful to:
```git rebase master```

##Remotes

1. Delete branches on merge in order to cleanup the number of branches that
one has to manage
2. Prevent direct pushes to master so that you do not break your production
build with an accidental push
3. Require approvals before merging
4. Mandatory succesful test before merging, which helps with continuous
integration

To conclude, always make sure to review the official documentation. One book
that I recommed is ProGit.
