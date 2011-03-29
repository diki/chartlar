function(e, option, category, header){

  var colors;
  var colorObj = $.Color();
  var widget = $(this);
  
  
  $("#chart-background-color-palette", widget).farbtastic(
    function callback(color){
      $("#chart-selected-color").css("background-color", color);
      $("#chart-selected-color").text(color);
      colors = color;
      
      colorObj = $.Color(color);
      
      var color1 = colorObj.analogous(0/360);
      var color2 = colorObj.analogous(15/360);
      var color3 = colorObj.analogous(30/360);
      var color4 = colorObj.analogous(45/360);
      var color5 = colorObj.analogous(60/360);
      
      $("#chart-color-analogous1", widget).find("div")
        .css("background-color", color1)
        .parent("td")
        .siblings("td")
        .find("label").text(color1.toHEX());
        
      $("#chart-color-analogous2", widget).find("div")
        .css("background-color", color2)
        .parent("td")
        .siblings("td")
        .find("label").text(color2.toHEX());
        
      $("#chart-color-analogous3", widget).find("div")
        .css("background-color", color3)
        .parent("td")
        .siblings("td")
        .find("label").text(color3.toHEX());
        
      $("#chart-color-analogous4", widget).find("div")
        .css("background-color", color4)
        .parent("td")
        .siblings("td")
        .find("label").text(color4.toHEX());
        
      $("#chart-color-analogous5", widget).find("div")
        .css("background-color", color5)
        .parent("td")
        .siblings("td")
        .find("label").text(color5.toHEX());
    }
  );
  
  $("td > div.color-analogous", widget).click(function(){
    var tempColor = $(this).css("background-color");
    $("#chart-selected-color", widget).css("background-color", tempColor);
    $("#chart-selected-color", widget).text($.Color(tempColor).toHEX());
    $("input[name=color-text]", widget).val($.Color(tempColor).toHEX());
    
    var currentColor = $(this).css("background-color");
    $("#chart-background-color-placeholder", widget).css("background-color", currentColor);
    $("#chartpreview").trigger("optionsChanged", [option, category, currentColor]);
    window.console.log("from color palette evently widget called", category)   
  });
  
  
  $("#chart-background-color-placeholder[rel]", widget).overlay({
    left: 5,
    top: 60
  });
  
//  $("#color-submit", widget).click(function(){
//    var currentColor = $("#chart-selected-color").css("background-color");
//    $("#chart-background-color-placeholder", widget).css("background-color", currentColor);
//    $("#chartpreview").trigger("optionsChanged", [option, category, currentColor]);
//    window.console.log("from color palette evently widget called")
//  });
  
  $("p", widget).text(header);
}
