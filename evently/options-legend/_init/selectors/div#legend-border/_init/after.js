function(e, category, changed){
    
  var widthT = $("input[name=legend-border-width]", this);
  var radiusT = $("input[name=legend-border-radius]", this);
  
  var colort, width, radius;
  $("#legend-border-color").farbtastic(
    function callback(color){
      //console.log(color);
      $("#legend-border-color-placeholder").css("background-color", color);
      colort = color;
    }
  );
  
  $("#legend-border-color-placeholder").click(function(){
    $("#legend-border-color").toggle();
  });
  
  $("#legend-border-color-submit").click(function(){
    //color = $("#chart-border-color-placeholder").css("background-color");
        
    $("#chartpreview").trigger("optionsChanged", ["legend", "borderColor", colort]);
  });
  
  $("#legend-border-width").slider({
    min: 0,
    max: 50,
    //value: height,
    stop: function(event, ui){
      width = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["legend", "borderWidth", width]);
    }   
  });
  
  $("#legend-border-radius").slider({
    min: 0,
    max: 50,
    //value: height,
    stop: function(event, ui){
      radius = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["legend", "borderRadius", radius]);
    }   
  });
  
    
  //changes slider view
  $("#legend-border-width > a").height("0.8em");
  $("#legend-border-width > a").width("0.5em");
  
  $("#legend-border-radius > a").height("0.8em");
  $("#legend-border-radius > a").width("0.5em");
  
}
