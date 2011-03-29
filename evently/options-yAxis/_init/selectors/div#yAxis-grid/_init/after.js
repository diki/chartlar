function(e, category, changed){
  
  var colort, width;
  $("#yAxis-grid-color").farbtastic(
    function callback(color){
      //console.log(color);
      $("#yAxis-grid-color-placeholder").css("background-color", color);
      colort = color;
    }
  );
  $("#yAxis-grid-color-placeholder").click(function(){
    $("#yAxis-grid-color").toggle();
  })
  $("#yAxis-grid-submit").click(function(){
    //color = $("#chart-border-color-placeholder").css("background-color");
    
    $("#chartpreview").trigger("optionsChanged", ["yAxis", "gridLineColor",colort]);
  });
  
  $("#yAxis-grid-width").slider({
    min: 0,
    max: 50,
    //value: height,
    stop: function(event, ui){
      width = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["yAxis", "gridLineWidth", width]);
    }   
  });
  
  $("#yAxis-grid-width > a").height("0.8em");
  $("#yAxis-grid-width > a").width("0.5em");
  
}
