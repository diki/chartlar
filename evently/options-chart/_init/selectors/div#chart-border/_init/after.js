function(e, category, changed){
    
  var app = $$(this).app;
  
    var colors;
  var colorObj = $.Color();
  var widget = $(this);
  
  $("#chart-background-color-palette", widget).farbtastic(
    function callback(color){
      $("#chart-background-color-placeholder", widget).css("background-color", color);
      $("#chart-selected-color", widget).css("background-color", color);
      $("#chart-selected-color", widget).text(color);
      colors = color;
      
      colorObj = $.Color(color);
      
      var color1 = colorObj.analogous(10/360);
      var color2 = colorObj.analogous(20/360);
      var color3 = colorObj.analogous(30/360);
      var color4 = colorObj.analogous(40/360);
      var color5 = colorObj.analogous(50/360);
      var color6 = colorObj.analogous(60/360);
      var color7 = colorObj.analogous(70/360);
      var color8 = colorObj.analogous(80/360);
      
      $("#chart-color-analogous1", widget).find("div")
        .css("background-color", color1);
        
      $("#chart-color-analogous2", widget).find("div")
        .css("background-color", color2);
        
      $("#chart-color-analogous3", widget).find("div")
        .css("background-color", color3);
        
      $("#chart-color-analogous4", widget).find("div")
        .css("background-color", color4);
        
      $("#chart-color-analogous5", widget).find("div")
        .css("background-color", color5);
        
      $("#chart-color-analogous6", widget).find("div")
        .css("background-color", color6);
        
      $("#chart-color-analogous7", widget).find("div")
        .css("background-color", color7);
        
      $("#chart-color-analogous8", widget).find("div")
        .css("background-color", color8);
    }
  );
  
  $("div.analogous-color", widget).click(function(){
    var tempColor = $(this).css("background-color");
    $("#chart-background-color-placeholder", widget).css("background-color", tempColor);
    $("input[name=color-name]", widget).val($.Color(tempColor).toHEX());
    $("#chartpreview").trigger("optionsChanged", ["chart", "borderColor", tempColor]);
    
  });
  
  $("#chart-background-color-placeholder", widget).click(function(){
    //$("#chart-background-color").toggle();
    $("#chart-background-color", widget).show("slide", {direction: "left"}, 1000);

    widget.css("border-top", "2px solid red");
    //widget.css("border-left", "4px solid #87CEFA");
    //widget.css("border-bottom", "2px solid red");
  });
  
//  $("#chart-background-color-placeholder[rel]").overlay({
//    left: widget.position().left + 250,
//    top: widget.position().top + 60
//  });
  
//  $("#chart-background-color-submit").click(function(){
//    //color = $("#chart-background-color-placeholder").css("background-color");  
//    $("#chartpreview").trigger("optionsChanged", ["chart", "backgroundColor", colors]);
//  });
  
  $("#chart-background-color .close", widget).click(function(){
    $("#chart-background-color", widget).hide("slide", {direction: "left"}, 1000);
    widget.css("border", "none");
  })
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
