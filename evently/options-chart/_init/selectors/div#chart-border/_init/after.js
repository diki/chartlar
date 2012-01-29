function(e, category, changed){
    
  var app = $$(this).app;
  
  var colors;
  var colorObj = $.Color();
  var widget = $(this);

  //$("#chart-border-color").evently("colorPalette", app, ["chart", "borderColor"]);
  $("#chart-border-width").slider({
    min: 0,
    max: 50,
    value: 25,
    stop: function(event, ui){
      width = ui.value;
      $(this).parent("td")
        .siblings("td")
        .find("label.show-label")
        .text(width);
      $("#chartpreview").trigger("optionsChanged", ["chart", "borderWidth", width]);
    }   
  });
  
  $("#chart-border-radius").slider({
    min: 0,
    max: 50,
    value: 25,
    stop: function(event, ui){
      radius = ui.value;
      $(this).parent("td")
        .siblings("td")
        .find("label.show-label")
        .text(radius);
      $("#chartpreview").trigger("optionsChanged", ["chart", "borderRadius", radius]);
      
    }   
  });
  
    
  //changes slider view
  $("#chart-border-width > a").height("0.8em");
  $("#chart-border-width > a").width("0.5em");
  
  $("#chart-border-radius > a").height("0.8em");
  $("#chart-border-radius > a").width("0.5em");
  
}
