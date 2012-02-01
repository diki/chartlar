function(e, category, changed){    
  //var height=$("#chartpreview").css("height"); 
  //var width = $("#chartpreview").css("width"); 
  var widget = $(this);
  $("#p-border-width", widget).slider({
    min: 0,
    max: 100,
    value: 0,
    stop: function(event, ui){
      width = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "plotBorderWidth", width]);
      $("span:odd", widget).html(width+"");
    }  
  });
  
  //changes slider view
  $("#p-border-width > a", widget).height("0.8em");
  $("#p-border-width > a", widget).width("0.5em");
  
}
