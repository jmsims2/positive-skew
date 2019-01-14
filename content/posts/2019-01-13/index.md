---
title: "The Collection Pipeline"
author: "jeffsims"
cover: "./images/hero.png"
category: "JavaScript"
date: "2019-01-13"
slug: "collection-pipeline"
tags:
    - javascript
    - refactoring
---

I'm reading the latest edition of [Refactoring by Martin Fowler](https://www.amazon.com/gp/product/0134757599) and came across a refactoring that I've been implementing a bit myself but, naively, wasn't aware that it was a formal technique.

THe refactor is to replace a loop with a pipeline. Lately, I've been using React more and more so I've become very used to using Array methods like map and filter often. I have found that my code becomes much more readable using array methods where I can rather than for loops.

Given an array that contain objects of addresses like:

```json
{
  "guid": "dc5cec00-37f0-4135-8b12-1aa7b13cc22e",
  "address": "123 Main Street",
  "city": "Anytown",
  "state": "Colorado",
  "zip": 80447
}
```

Make a new array of just zip codes that are greater than 20000 (I don't know why you would want to do that but stay with me here).

A for loop implementation would look something like this:

```javascript
let temp = [];
for (let i = 0; i < addresses.length; i++) {
  if (addresses[i].zip > 20000) {
    temp.push(addresses[i].zip);
  }
}
```

We initialize a temp array and then go through all the ceremony of setting up the for loop. The ugliest part, to me, is indexing into the array inside of the loop. I can't tell you how many times I have forgotten to include the `[i]` part and blew my program up.

Here is the same thing, except this time using the array methods filter and map.

```javascript
let temp = addresses.filter(a => a.zip > 20000).map(a => a.zip);
```

Ah, much easier on the eyes! First we filter the addresses array, which returns a new array of objects that meet our criteria. Next, we map over the returned array and return just the zip code.

I put together a [Codesandbox](https://codesandbox.io/s/jpqm2nlyyw) and did some limited performance testing and the results weren't wildly different between the techniques. So in my mind, readability wins out so I prefer the pipeline approach.
