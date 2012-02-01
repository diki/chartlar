function(){
	
	var widget = $(this);
  $("input[name=legend-enabled]", widget).change(function(){
    if($(this).is(":checked")) legendEnabled = true;
    else legendEnabled = false;
    
    $("#chartpreview").trigger("optionsChanged", ["legend", "enabled", legendEnabled]);
  });

}
