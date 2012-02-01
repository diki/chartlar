function(){
	
	var widget = $(this);
  $("select#legend-layout", widget).change(function(){
    var layout = $(this).val();
    $("#chartpreview").trigger("optionsChanged", ["legend", "layout", layout]);
  });

}
