function(e, category, changed){
  var colors;
  $("#xAxis-alternate-grid-colors").farbtastic(
    function callback(color){
      //console.log(color);
      $("#xAxis-alternate-grid-color-placeholder").css("background-color", color);
      colors = color; 
      //$("#chartpreview").trigger("optionsChanged", [category, [color], changed]);
    }
  );
  $("#xAxis-alternate-grid-color-placeholder").click(function(){
    $("#xAxis-alternate-grid-colors").toggle();
  })
  $("#xAxis-alternate-grid-color-submit").click(function(){
    //color = $("#chart-background-color-placeholder").css("background-color");  
    $("#chartpreview").trigger("optionsChanged", ["xAxis", "alternateGridColor", colors]);
  })
  
}
