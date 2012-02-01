function(e, category, changed){    
  //var height=$("#chartpreview").css("height"); 
  //var width = $("#chartpreview").css("width"); 
  var widget = $(this);
  $("#border-radius", widget).slider({
    min: 0,
    max: 20,
    value: 0,
    stop: function(event, ui){
      radius = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["legend", "borderRadius", radius]);
      $("span:odd", widget).html(radius+"");
    }  
  });
  
  //changes slider view
  $("#border-radius > a", widget).height("0.8em");
  $("#border-radius > a", widget).width("0.5em");
  
}
