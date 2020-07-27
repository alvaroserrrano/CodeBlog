---
title: "Helpful Git Commands You Should Know"
date: 2020-07-26 09:00:00
author: "Alvaro Serrano"
image: ../../images/git-commands.png
tags:
  - Code
  - Software
  - AWS
  - Git
---

Git Commands You Should Know

```
git log
git log --oneline
git log --graph
```
View Your "undo" history

```
git status
```
Very useful for scary merge and rebase operations

```
git diff --staged
git diff --unstaged
git diff branch1..brach2
```

```
git reset <commit-sha>
```
In order to uncommit and unstage your changes but keep files on your working
directory

```
git switch <branch>
git checkout <branch> #old version
```

```
git switch -
```
Go back to the branch you were on

```
Git reset --hard HEAD
```
Go back to latest commit and discard unstaged changes. Very helpful when you
do not know what you just did and you messed up

```
git restore <file>
```
Reset file back to how it was

```
git reset --hard HEAD~1
```
Undo latest commit and rewrite history

```
git reset --hard HEAD~n
git reset --hard <commit-sha>
```
Rewind back to n commits

* --soft -> Uncommit changes but keep changes staged
* --mixed -> Uncommit and unstage but keep changes in the working directory
* --hard -> Uncommit, unstage and get rid of changes

```
git push -f
```
Useful when you have rewritten history and you want it to be reflected on your
remote

Force pushing should be avoided on branches that are shared with your team

```
git commit --amend
```
To rename your last commit

```
git rebase -i <commit-hash>
```
The commit hash points to the commmit before the commits that you want to
modify. This opens up a prompt that lets you make a decision about what commits
you want to keep, squash or rename

```
git rebase --abort
```
Get rid of your rebase

```
git cherry-pick <commit-sha>
```
Bring in a commit from another branch

```
git checkout <branch> <file>
```
Bring in a file from another branch

```
git rm --cached <file>
```
Stop tracking a file

```
git stash
git stash -u #for untracked files
git stash list
```
Save your changes to the top of the stash stack

```
git stash pop
```
Pick up the most recent item added to the stack

```
git stash apply stash@{stash-index}
```
Apply an item from the stash list

```
git revert HEAD
```
Undo the last commit

```
git revert <commit-hash>
```
Undo a given commit without undowin history, which is helpful for shared
branches

```
git fetch --all --prune
```
Useful when you delete branches after merge

Create a .gitignore file on your root folder for files that you do not want
to track


