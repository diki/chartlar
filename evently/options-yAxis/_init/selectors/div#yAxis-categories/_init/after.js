function(){
  var textA = $("textarea[name=y-categories]", this);
  
  $("input[name=yAxis-categories-submit]").click(function(){
    var text = textA.val();
    var categories = text.split(",");
    $("#chartpreview").trigger("optionsChanged", ["yAxis", "categories", categories]);
  });
    
}
