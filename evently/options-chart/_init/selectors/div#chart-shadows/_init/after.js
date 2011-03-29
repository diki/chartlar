function(){
  
  $("input[name=chart-shadow]").change(function(){
    if($(this).is(":checked")) chartShadowEnabled = true;
    else chartShadowEnabled = false;
    
    $("#chartpreview").trigger("optionsChanged", ["chart", "shadow", chartShadowEnabled]);
  });
  
  $("input[name=plot-shadow]").change(function(){
    if($(this).is(":checked")) plotShadowEnabled = true;
    else plotShadowEnabled = false;
    
    $("#chartpreview").trigger("optionsChanged", ["chart", "plotShadow", plotShadowEnabled]);
  });
}
