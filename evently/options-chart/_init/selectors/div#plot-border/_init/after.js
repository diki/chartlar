function(e, category, changed){
  var colors;
  var colorObj = $.Color();
  var widget = $(this);
  
  $("#plot-border-width").slider({
    min: 0,
    max: 50,
    value: 25,
    stop: function(event, ui){
      width = ui.value;
      $(this).parent("td")
        .siblings("td")
        .find("label.show-label")
        .text(width);
      $("#chartpreview").trigger("optionsChanged", ["chart", "plotBorderWidth", width]);
      
    }   
  });
//  
  $("#plot-border-width > a").height("0.8em");
  $("#plot-border-width > a").width("0.5em");
  
}
