function(e, category, changed){    
  //var height=$("#chartpreview").css("height"); 
  //var width = $("#chartpreview").css("width"); 
  var widget = $(this);
  $("#chart-width", widget).slider({
    min: 0,
    max: 2000,
    value: 787,
    stop: function(event, ui){
      width = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "width", width]);
      $("span:odd", widget).html(width+"");
    }  
  });
  
  //changes slider view
  $("#chart-width > a", widget).height("0.8em");
  $("#chart-width > a", widget).width("0.5em");
  
}
