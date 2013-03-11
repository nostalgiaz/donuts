donuts
======

Demo
----
http://www.larentis.eu/donuts/

Usage
-----
Just include jQuery, donuts.css CSS and donuts.js
``` html
<link href="donuts.css" rel="stylesheet">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="donuts.js"></script>
```

Example
-------
``` html
<div class="donut donut-big">
    <div class="donut-arrow" data-percentage="10"></div>
</div>
<div class="donut">
    <div class="donut-arrow" data-percentage="30"></div>
</div>
<div class="donut donut">
    <div class="donut-arrow" data-percentage="60"></div>
</div>
<div class="donut donut-small">
    <div class="donut-arrow" data-percentage="90"></div>
</div>
```

Update Donut Percentage
-----------------------
Just target your arrow of choice and call the custom event below with the new percentage as an argument.
``` javascript
$('.donut-arrow').trigger('updatePercentage', 100)
```

License
-------
Licensed under the Apache License, Version 2.0
http://www.apache.org/licenses/LICENSE-2.0

Credits
-------
[Arne Hormann](https://github.com/arnehormann) helps me to simplify the structure, the css and the js
