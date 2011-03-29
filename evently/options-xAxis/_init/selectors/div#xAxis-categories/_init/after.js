function(){
  var textA = $("textarea[name=x-categories]", this);
  
  $("input[name=xAxis-categories-submit]").click(function(){
    var text = textA.val();
    var categories = text.split(",");
    $("#chartpreview").trigger("optionsChanged", ["xAxis", "categories", categories]);
  });
    
}
