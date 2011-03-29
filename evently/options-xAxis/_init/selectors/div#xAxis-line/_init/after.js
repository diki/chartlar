function(e, category, changed){
  
  var colort, width;
  $("#xAxis-line-color").farbtastic(
    function callback(color){
      //console.log(color);
      $("#xAxis-line-color-placeholder").css("background-color", color);
      colort = color;
    }
  );
  $("#xAxis-line-color-placeholder").click(function(){
    $("#xAxis-line-color").toggle();
  })
  $("#xAxis-line-submit").click(function(){
    //color = $("#chart-border-color-placeholder").css("background-color");
  
    $("#chartpreview").trigger("optionsChanged", ["xAxis", "lineColor",colort]);
  });
  
  $("#xAxis-line-width").slider({
    min: 0,
    max: 50,
    //value: height,
    stop: function(event, ui){
      width = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["xAxis", "lineWidth", width]);
    }   
  });
  
  $("#xAxis-line-width > a").height("0.8em");
  $("#xAxis-line-width > a").width("0.5em");
  
}
