---
title: "Visualizing Relationships Between 2019 NFL Head Coaches"
author: "jeffsims"
cover: "./images/hero.png"
category: "JavaScript"
date: "2019-02-01"
slug: "nfl-coach-relationship-viz"
tags:
    - javascript
    - data
    - d3
---

Note: Source Code is <a href="https://github.com/jmsims2/nfl-coach-network-vis" target="_blank">here</a>. End result is <a href="https://nfl-coach-network-viz.now.sh/" target="_blank">here</a>.

I've been wanting to play around with network visualizations for awhile now. A few weeks ago, I was browsing some of Mike Bostock's work (the creator of d3.js) and came across [this](https://archive.nytimes.com/www.nytimes.com/interactive/2013/02/20/movies/among-the-oscar-contenders-a-host-of-connections.html) visualization from the New York Times. It's gorgeous. Not only does it look beautiful, but the interactions when hovering over a node or a link are perfect. So I decided to give it a try myself.

I wanted to visualize relationships between current NFL Head Coaches. To get my data set, I leaned on wikipedia to get each coaches playing and coaching history by year. I also assumed that Brian Flores and Zac Carter will be named the head coaches of the Miami Dolphins and Cincinnati Bengals, respectively.

Once I had my [data](https://github.com/jmsims2/nfl-coach-network-vis/blob/master/coaches.json) compiled, I wrote a little node.js script to take it from an array of objects representing a single year in a coaches career to an object of nodes and links. That script can be found [here](https://github.com/jmsims2/nfl-coach-network-vis/blob/master/setupData.js).

Now that I had my data ready, it was time to start playing with the network visualization. I leveraged d3.js and found a few tutorials to help guide me along the way. Believe it or not, getting the network visualization to show up on the screen was not the hardest part. The hardest part, by far, was figuring out how to get an image as a background for an svg element. For that, I used patterns defined in the svg since it's not as simple as a css rule. That said, patterns seem to be way more powerful so I'm excited to play with them some more. The result of my hacking so far is below. I have a few things left that I'd like to do. First, I want to add some animation when hovering over nodes and links, like in the NYTimes visualization. Second, I want to see what the relationships would look like if I add some former coaches who may have more relationships, such as Bill Parcells or Bill Cowher among many others. To see the completed product, go to <a href="https://nfl-coach-network-viz.now.sh/" target="_blank">https://nfl-coach-network-viz.now.sh/</a>.

<a href="https://nfl-coach-network-viz.now.sh/" target="_blank">
  <img src="./nfl-coach-network-viz.png" alt="NFL Head Coach Relationships" />
</a>
