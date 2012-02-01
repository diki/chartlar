function(e, category, changed){    
  //var height=$("#chartpreview").css("height"); 
  //var width = $("#chartpreview").css("width"); 
  var widget = $(this);
  $("#chart-height", widget).slider({
    min: 0,
    max: 2000,
    value: 400,
    stop: function(event, ui){
      height = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "height", height]);
      $("span:odd", widget).html(height+"");
    }   
  });
  
  $("#chart-height > a", widget).height("0.8em");
  $("#chart-height > a", widget).width("0.5em");
  
}
