function(e, category, changed){

  var margin = [50,50,50,50];
  var widget = $(this);
  
  $("#chart-margin-top", widget).slider({
    min: 0,
    max: 100,
    value: 50,
    stop: function(event, ui){
      margin[0] = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "margin", margin]);
      $("span#mtop",widget).html(margin[0]+"");
    }  
  });
  
  $("#chart-margin-right", widget).slider({
    min: 0,
    max: 100,
    value: 50,
    stop: function(event, ui){
      margin[1] = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "margin", margin]);
      $("span#mright").html(margin[1]+"");
    }  
  });
  
  $("#chart-margin-bottom", widget).slider({
    min: 0,
    max: 100,
    value: 50,
    stop: function(event, ui){
      margin[2] = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "margin", margin]);
      $("span#mbot").html(margin[2]+"");
    }  
  }); 
  
  $("#chart-margin-left", widget).slider({
    min: 0,
    max: 100,
    value: 50,
    stop: function(event, ui){
      margin[3] = ui.value;
      $("#chartpreview").trigger("optionsChanged", ["chart", "margin", margin]);
      $("span#mleft").html(margin[3]+"");
    }  
  });
  
  //changes slider view
  $("#chart-margin-top > a", widget).height("0.8em");
  $("#chart-margin-top > a", widget).width("0.5em");
  
  $("#chart-margin-right > a", widget).height("0.8em");
  $("#chart-margin-right > a", widget).width("0.5em");
  $("#chart-margin-bottom > a", widget).height("0.8em");
  $("#chart-margin-bottom > a", widget).width("0.5em");
  $("#chart-margin-left > a", widget).height("0.8em");
  $("#chart-margin-left > a", widget).width("0.5em");

}
