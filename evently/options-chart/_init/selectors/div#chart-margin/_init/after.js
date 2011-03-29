function(e, category, changed){

  var margin = [50,50,50,50];
  
  $("#chart-top-margin").slider({
    min: 0,
    max: 500,
    value: 50,
    stop: function(event, ui){
      margin[0] = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "margin", margin]);
    }    
  });
  $("#chart-right-margin").slider({
    min: 0,
    max: 500,
    value: 50,
    stop: function(event, ui){
      margin[1] = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "margin", margin]);
    }   
  });
  $("#chart-bottom-margin").slider({
    min: 0,
    max: 500,
    value: 50,
    stop: function(event, ui){
      margin[2] = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "margin", margin]);
    }  
  });
  $("#chart-left-margin").slider({
    min: 0,
    max: 500,
    value: 50,
    stop: function(event, ui){
      margin[3] = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "margin", margin]);
    }  
  });
  
  $("#chart-top-margin > a").height("0.8em");
  $("#chart-top-margin > a").width("0.5em");
  
  $("#chart-right-margin > a").height("0.8em");
  $("#chart-right-margin > a").width("0.5em");
  
  $("#chart-bottom-margin > a").height("0.8em");
  $("#chart-bottom-margin > a").width("0.5em");
  
  $("#chart-left-margin > a").height("0.8em");
  $("#chart-left-margin > a").width("0.5em");
}
