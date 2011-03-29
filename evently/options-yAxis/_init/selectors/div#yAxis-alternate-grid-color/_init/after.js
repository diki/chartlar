function(e, category, changed){
  var colors;
  $("#yAxis-alternate-grid-colors").farbtastic(
    function callback(color){
      //console.log(color);
      $("#yAxis-alternate-grid-color-placeholder").css("background-color", color);
      colors = color; 
      //$("#chartpreview").trigger("optionsChanged", [category, [color], changed]);
    }
  );
  $("#yAxis-alternate-grid-color-placeholder").click(function(){
    $("#yAxis-alternate-grid-colors").toggle();
  })
  $("#yAxis-alternate-grid-color-submit").click(function(){
    //color = $("#chart-background-color-placeholder").css("background-color");  
    $("#chartpreview").trigger("optionsChanged", ["yAxis", "alternateGridColor", colors]);
  })
  
}
