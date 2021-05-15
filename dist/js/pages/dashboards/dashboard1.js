/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
  "use strict";
  // ==============================================================
  // Newsletter
  // ==============================================================

  var chart2 = new Chartist.Bar(
    ".amp-pxl",
    {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      series: [
        [9, 5, 3, 7, 5, 10, 3],
        [6, 3, 9, 5, 4, 6, 4],
      ],
    },
    {
      axisX: {
        // On the x-axis start means top and end means bottom
        position: "end",
        showGrid: false,
      },
      axisY: {
        // On the y-axis start means left and end means right
        position: "start",
      },
      high: "12",
      low: "0",
      plugins: [Chartist.plugins.tooltip()],
    }
  );

  var chart = [chart2];
});
