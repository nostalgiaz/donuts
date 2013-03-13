/* ============================================================
 * donuts v1.0 by Larentis Mattia @spiritualGuru
 * http://www.larentis.eu/donuts/
 * ============================================================
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 * ============================================================ */

$(function () {
  "use strict";

  var colors = ['red', 'orange', 'yellow', 'green']
    , segmentSize = 100.0 / colors.length;

  colors.push(colors[colors.length - 1]);

  var updateArrow = function ($this) {
    var percentage = $this.data('percentage');

    if (percentage > 100)
      percentage = 100;
    else if (percentage < 0)
      percentage = 0;

    $this.css('transform', 'rotate(' + ((1.8 * percentage) - 90) + 'deg)');
    $this.parent()
      .removeClass(colors.join(' '))
      .addClass(colors[Math.floor(percentage / segmentSize)]);
  };

  $('.donut-arrow')
    .each(function () {
      updateArrow($(this))
    })
    .bind('updatePercentage', function (e, amount) {
      $(this).data('percentage', amount);
      updateArrow($(this));
    });
});