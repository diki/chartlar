function(e, category, changed){
  var colors;
  var colorObj = $.Color();
  var widget = $(this);
 
  $("div#chart-color-selector-wrapper img", widget).click(function(){
    var display = $("#color-palette", widget).css("display");
   	if(display=="none"){
   		$("#color-palette", widget).css("display","block");
   		$("#color-palette", widget).show("slide", {direction: "up"}, 1000);
   	}else{
   		$("#color-palette", widget).css("display","none");
   		$("#color-palette", widget).hide("slide", {direction: "up"}, 1000);
   	} 
  });
  
  $("#color-palette #main-colors div", widget).click(function(){
  	var bc=$(this).css("background-color");
  	$("div#chart-background-color-placeholder", widget).css("background-color", bc);
  	$("#chartpreview").trigger("optionsChanged", ["legend", "backgroundColor", bc]);
  });
  
  $("#color-palette #similar-colors div", widget).click(function(){
  	var bc=$(this).css("background-color");
  	$("div#chart-background-color-placeholder", widget).css("background-color", bc);
  	$("#chartpreview").trigger("optionsChanged", ["legend", "backgroundColor", bc]);
  });
  
  $("div#main-colors > div", widget).click(function(){
  	var currentColor = $(this).css("background-color");
  	var colorObj = $.Color(currentColor);

  	$("div#similar-colors", widget).find("div").each(function(idx,el){
  		var offset=0;
  		var compOffset = 0
  		var $el = $(el);
  		$el.css("background-color", colorObj.analogous((offset+idx*30)/360));
  		if(idx>=5){
  			$el.css("background-color", colorObj.analogous(-(offset+idx*15)/360));
  		}
  	});
  	
  });
  
  $("#chart-background-color .close", widget).click(function(){
    $("#chart-background-color", widget).hide("slide", {direction: "left"}, 1000);
    widget.css("border", "none");
  })
  
}
