function(e, option, category, value){
  console.log("from chartpreview optionsChanged", option, category, value);
  $$(this).chartOptions[option][category] = value;
  
  if($.isArray(category)){
    var i = 0;
    for(i; i<category.length; i++){
      $$(this).chartOptions[option][category[i]] = value[i];
    }
  } else {
    $$(this).chartOptions[option][category] = value;
  }
//  if(changed.length == 0){
//    $$(this).chartOptions[category] = value;
//  } else {
//    var i=0;
//    for(i; i<changed.length; i++){
//      $$(this).chartOptions[category][changed[i]] = value[i];
//    }
//  }
// //$$(this).chartOptions["sure"]["sure"] = "sure"
//  //$$(this).chart.destroy();
//  
//  console.log("optionsChanged", $$(this).chartOptions)
//  
  $$(this).chart.destroy();
  //console.log($$(this).chartOptions)
  $$(this).chart = new Highcharts.Chart($$(this).chartOptions);

  
  
}
