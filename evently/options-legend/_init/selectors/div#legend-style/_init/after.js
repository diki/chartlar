function(e, category, changed){

  var style = {
    "position": "absolute",
    "zIndex": 10,
    "padding": "5px",
    "height": "auto"
  }
  
  $("#legend-top-margin").slider({
    min: 0,
    max: 500,
    value: 0,
    stop: function(event, ui){
      style["top"] = ui.value + "px";
      style["bottom"] = "auto";
      $("#chartpreview").trigger("optionsChanged", ["legend", "style", style]);
    }    
  });
  $("#legend-left-margin").slider({
    min: 0,
    max: 1500,
    value: 0,
    stop: function(event, ui){
      style["left"] = ui.value + "px";
      style["right"] = "auto";
      $("#chartpreview").trigger("optionsChanged", ["legend", "style", style]);
    }  
  });
  
  $("#legend-top-margin > a").height("0.8em");
  $("#legend-top-margin > a").width("0.5em");
  
  $("#legend-left-margin > a").height("0.8em");
  $("#legend-left-margin > a").width("0.5em");
}
