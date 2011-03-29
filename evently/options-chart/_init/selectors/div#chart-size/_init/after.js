function(e, category, changed){    
  //var height=$("#chartpreview").css("height"); 
  //var width = $("#chartpreview").css("width"); 
  $("#chart-height").slider({
    min: 0,
    max: 2000,
    value: 1000,
    stop: function(event, ui){
      height = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "height", height]);
    }   
  });
  $("#chart-width").slider({
    min: 0,
    max: 2000,
    value: 1000,
    stop: function(event, ui){
      width = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "width", width]);
    }  
  });
  
  //changes slider view
  $("#chart-width > a").height("0.8em");
  $("#chart-width > a").width("0.5em");
  
  $("#chart-height > a").height("0.8em");
  $("#chart-height > a").width("0.5em");
  
}
