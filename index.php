<!DOCTYPE html>
<html>
  <head>
    <title>Chartlar</title>
    <link href="http://fonts.googleapis.com/css?family=Josefin+Sans+Std+Light:regular" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="style/main.css" type="text/css">
    <link rel="stylesheet" href="style/mine.css" type="text/css">
		  
  </head>
  <body>
    <div id="header">
	      <div id="account"></div>
<!--      <h1><a href="#/">Taskr</a> <span id="current-path"></span></h1>-->
<!--      <h1 style="padding-top: 10px; padding-left: 5px; color: tomato;">Chartlar</h1>-->
    </div>
    <div id="content">
<!--    		<div class="clear"></div>-->
    		<ul class="css-tabs">
				    <li><a href="#"">Chart</a></li>
				    <li><a href="#">Legend</a></li>
				    <li><a href="#">Titles</a></li>
				    <li><a href="#">Subtitles</a></li>
				    <li><a href="#">x-Axis</a></li>
				    <li><a href="#">y-Axis</a></li>
			  </ul>
			  <div class="clear"></div>
        <div id="sidebar" class="sidebar-designer" style="float: left;">
          <div id="designer-container" style="">
  <!--          <h2 class="current">Chart</h2>-->
		        <div id=options-chart class="pane" style="display: block;"></div>
  <!--          <h2>Legend</h2>-->
		        <div id=options-legend class="pane" ></div>
  <!--          <h2>Title</h2>-->
		        <div id=options-titles class="pane"></div>
  <!--          <h2>Subtitle</h2>-->
		        <div id=options-subtitles class="pane"></div>
  <!--          <h2>xAxis</h2>-->
		        <div id=options-xAxis class="pane"></div>
  <!--          <h2>yAxis</h2>-->
		        <div id=options-yAxis class="pane"></div>
		      </div>
		</div>
		    
		<div id="chartpreview" class="activity-chart"></div>
		    
      </div>
  </body>
  <script src="script/mustache.js"></script>
  <script src="highcharts/highcharts.js"></script>
  <script src="script/jQuery-UI/js/jquery-ui-1.8.1.custom.min.js"></script>
  <script src="script/jqTools/jquery.tools.min.js"></script>
  <script src="script/jquerycolors/color.core.js"></script>
  <script src="script/jquerycolors/color.object.js"></script>
  <script src="script/jquerycolors/color.rgb.js"></script>
  <script src="script/jquerycolors/color.parse.js"></script>
  <script src="script/jquerycolors/color.huebased.js"></script>
  <script src="script/jquerycolors/color.hsv.js"></script>
  <script src="script/jquerycolors/color.hsl.js"></script>
  <script src="script/jquerycolors/color.related.js"></script>
  
  <script src="script/md5.js"></script>
  
  
</html>
