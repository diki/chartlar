function(e, option, category, value){
  console.log("from chartpreview optionsChanged", option, category, value);
  
  /*
  
  	This evently widget creates global chart elements on after.js function of init.These elements are global chart object
  	drawn on screen and options dynamically changing through events coming from option widgets.(obviously all widgets start with option)
  	
  	Several same type of events coming from all chart-option widgets are also handled in this widget where
  	global ChartOptions object [$$(this).chartOption] is updated and chart is redrawn.
  	
  */
  
  $$(this).chartOptions[option][category] = value;
  
  if($.isArray(category)){
    var i = 0;
    for(i; i<category.length; i++){
      $$(this).chartOptions[option][category[i]] = value[i];
    }
  } else {
    $$(this).chartOptions[option][category] = value;
  }
	 
  $$(this).chart.destroy();
  $$(this).chart = new Highcharts.Chart($$(this).chartOptions);

  
  
}
