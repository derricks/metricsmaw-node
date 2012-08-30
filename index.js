/** Test program for metricsmaw library. */

var net = require('net')
  , metrics = require('metricsmaw');

setInterval(
    function() {
        metrics.init("127.0.0.1",18000)
        metrics.incrementCounter('node_tests',25);
    },10000);