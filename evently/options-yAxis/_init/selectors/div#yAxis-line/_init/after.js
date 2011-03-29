function(e, category, changed){
    
  var widthT = $("input[name=yAxis-line-width]", this);
  
  var colort, width, radius;
  $("#yAxis-line-color").farbtastic(
    function callback(color){
      //console.log(color);
      $("#yAxis-line-color-placeholder").css("background-color", color);
      colort = color;
    }
  );
  $("#yAxis-line-color-placeholder").click(function(){
    $("#yAxis-line-color").toggle();
  })
  $("#yAxis-line-submit").click(function(){
    //color = $("#chart-border-color-placeholder").css("background-color");
    
    if(widthT.val()=="") width=0;
    else width = parseInt(widthT.val());
  
    $("#chartpreview").trigger("optionsChanged", ["yAxis", "lineColor",colort]);
  });
  
  $("#yAxis-line-width").slider({
    min: 0,
    max: 50,
    //value: height,
    stop: function(event, ui){
      width = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["yAxis", "lineWidth", width]);
    }   
  });
  
  $("#yAxis-line-width > a").height("0.8em");
  $("#yAxis-line-width > a").width("0.5em");
  
}
