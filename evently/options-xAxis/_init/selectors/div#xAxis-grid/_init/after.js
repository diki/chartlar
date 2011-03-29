function(e, category, changed){
    
  var colort, width;
  $("#xAxis-grid-color").farbtastic(
    function callback(color){
      //console.log(color);
      $("#xAxis-grid-color-placeholder").css("background-color", color);
      colort = color;
    }
  );
  $("#xAxis-grid-color-placeholder").click(function(){
    $("#xAxis-grid-color").toggle();
  });
  $("#xAxis-grid-submit").click(function(){
    //color = $("#chart-border-color-placeholder").css("background-color");
  
    $("#chartpreview").trigger("optionsChanged", ["xAxis", "gridLineColor",colort]);
  });
  
  $("#xAxis-grid-width").slider({
    min: 0,
    max: 50,
    //value: height,
    stop: function(event, ui){
      width = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["xAxis", "gridLineWidth", width]);
    }   
  });
  
  $("#xAxis-grid-width > a").height("0.8em");
  $("#xAxis-grid-width > a").width("0.5em");
  
}
