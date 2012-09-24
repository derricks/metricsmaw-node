/** Test program for metricsmaw library. */

var net = require('net')
  , metrics = require('metricsmaw')
  , util=require('util')
  ;

setInterval(
    function() {
        metrics.init("127.0.0.1",18000);
        metrics.incrementCounter('node_tests',25);
    },10000);
    
setInterval(function() {
     metrics.init("127.0.0.1",18000);
     
     metrics.getAllMetricNames(function(err,results) {
        results.forEach(function(item) {
            metrics.getMetricDetails(item,function(err,info) {
                console.log("item %s value %s",item,util.inspect(info,false,null));
            }); 
        });
     });
},5000);