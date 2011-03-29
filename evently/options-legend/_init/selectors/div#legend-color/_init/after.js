function(e, category, changed){
  var colors;
  $("#legend-background-color").farbtastic(
    function callback(color){
      //console.log(color);
      $("#legend-background-color-placeholder").css("background-color", color);
      colors = color; 
      //$("#chartpreview").trigger("optionsChanged", [category, [color], changed]);
    }
  );
  $("#legend-background-color-placeholder").click(function(){
    $("#legend-background-color").toggle();
  })
  $("#legend-background-color-submit").click(function(){
    //color = $("#chart-background-color-placeholder").css("background-color");  
    $("#chartpreview").trigger("optionsChanged", ["legend", "backgroundColor", colors]);
  })
  
}
