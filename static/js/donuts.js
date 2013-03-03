$(function () {
  "use strict";

  $('.donut-arrow').each(function () {
    var $this = $(this)
      , percentage = $this.data('percentage')
      , color;

    if (percentage > 100)
      percentage = 100;
    else if (percentage < 0)
      percentage = 0;

    percentage *= 1.8;

    $this.css('transform', 'rotate(' + (percentage - 90) + 'deg)');

    if (percentage < 60)
      color = 'red';
    else if (percentage < 120)
      color = 'yellow';
    else color = 'green';

    $this.siblings().addClass(color);
  });
});