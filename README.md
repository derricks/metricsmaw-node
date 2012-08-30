metricsmaw-node
===============

This is a simple node library for interacting with <a href="https://github.com/derricks/metricsmaw">metricsmaw</a>. As with metricsmaw, this library
is still very early in development, especially since I'm still learning the idioms of node.js. But this library fits my immediate need, which
is to get data from a node.js process into my server.

Error handling -- particularly if the socket gets closed -- is nonexistent. Once I figure out the norms for handling errors in node programs, I'll add 
proper logic for it.

A sample index.js file is included that will just increment a count by 25 every 10 seconds.

Basic Usage
-----------
>        var metrics = require('metricsmaw');
>        metricsmaw.init(host,port);
>        metrics.incrementCounter("randomCounter",4); // increases randomCounter by 4
>        metrics.decrementCounter("randomCounter",4); // decrements randomCounter by 4
>        metrics.setGauge("someGauge",17); // sets the specified gauge to the specified value
>        metrics.markMeter("rateMeter",7); // add the amount to the specified meter
