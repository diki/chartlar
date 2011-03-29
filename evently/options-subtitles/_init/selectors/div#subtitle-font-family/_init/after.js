function(){
  var familySelect = $("select#subtitle-font-family", this);
  var typeSelect = $("select#subtitle-typeface", this);
  
  var fontLink = "http://fonts.googleapis.com/css?family=";
  var rel = "stylesheet";
  var type = "text/css";
  var addedStyles = {};
  //var style = $$("#options-titles").titleStyle;
  
  familySelect.change(function(){
    var famLink="";
    var famText = $(this).val();
    var fam = $(this).val().split(" ");
     
    for(var i=0; i<fam.length; i++){
      if(fam[i+1]!=undefined) famLink = famLink + fam[i] + "+";
      else famLink = famLink + fam[i];
    }
    
    console.log(famLink);
    
    var headID = document.getElementsByTagName("head")[0];         
    var cssNode = document.createElement('link');   
    cssNode.href = fontLink + famLink;
    cssNode.rel = 'stylesheet';
    cssNode.type = 'text/css';
    if(addedStyles[famText]==undefined) {
      headID.appendChild(cssNode); 
      addedStyles[famText] = true;
    }
        
    $$("#options-subtitles").subtitleStyle["fontFamily"] = famText;
    $("#chartpreview").trigger("optionsChanged", ["subtitle", "style", $$("#options-subtitles").subtitleStyle]);
    
  });
  
  typeSelect.change(function(){
    if($(this).val()=="Regular"){
      $$("#options-subtitles").subtitleStyle["fontWeight"] = 400;
      $$("#options-subtitles").subtitleStyle["fontStyle"] = "normal";
    }
    
    else if($(this).val()=="Italic"){
      $$("#options-subtitles").subtitleStyle["fontWeight"] = 400;
      $$("#options-subtitles").subtitleStyle["fontStyle"] = "italic";
    }
    
    else if($(this).val()=="Bold"){
      $$("#options-subtitles").subtitleStyle["fontWeight"] = 700;
      $$("#options-subtitles").subtitleStyle["fontStyle"] = "normal";
    }
    
    else if($(this).val()=="Bold Italic"){
      $$("#options-subtitles").subtitleStyle["fontWeight"] = 700;
      $$("#options-subtitles").subtitleStyle["fontStyle"] = "italic";
    }
    
    $("#chartpreview").trigger("optionsChanged", ["subtitle", "style", $$("#options-subtitles").subtitleStyle]);
    
  });
  
  var colort;
  $("#subtitle-font-color").farbtastic(
    function callback(color){
      //console.log(color);
      $("#subtitle-font-color-placeholder").css("background-color", color);
      colort = color;
    }
  );
  $("#subtitle-font-color-placeholder").click(function(){
    $("#subtitle-font-color").toggle();
  });
  $("#subtitle-font-color-submit").click(function(){
    //color = $("#chart-border-color-placeholder").css("background-color");
    $$("#options-subtitles").subtitleStyle["color"] = colort;
		$("#chartpreview").trigger("optionsChanged", ["subtitle", "style", $$("#options-subtitles").subtitleStyle]);
  });
  
  
  $("#subtitle-font-size").slider({
    min: 0,
    max: 200,
    value: 0,
    stop: function(event, ui){
      $$("#options-subtitles").subtitleStyle["fontSize"] = ui.value+"pt";
      $("#chartpreview").trigger("optionsChanged", ["subtitle", "style", $$("#options-subtitles").subtitleStyle]);
    }    
  });
  
  $("#subtitle-font-top-margin").slider({
    min: 0,
    max: 500,
    value: 0,
    stop: function(event, ui){;
      $$("#options-subtitles").subtitleStyle["top"] = ui.value + "px";
    	$$("#options-subtitles").subtitleStyle["bottom"] = "auto";
    	//console.log("subtitle-top", $$("#options- titles").subtitleStyle);
      $("#chartpreview").trigger("optionsChanged", ["subtitle", "style", $$("#options-subtitles").subtitleStyle]);
    }    
  });
  
  $("#subtitle-font-left-margin").slider({
    min: 0,
    max: 1500,
    value: 0,
    stop: function(event, ui){
    	$$("#options-subtitles").subtitleStyle["left"] = ui.value + "px";
    	$$("#options-subtitles").subtitleStyle["right"] = "auto";
      $("#chartpreview").trigger("optionsChanged", ["subtitle", "style", $$("#options-subtitles").subtitleStyle]);
    }  
  });
  
  $("#subtitle-font-size > a").height("0.8em");
  $("#subtitle-font-size > a").width("0.5em");
  
  $("#subtitle-font-top-margin > a").height("0.8em");
  $("#subtitle-font-top-margin > a").width("0.5em");
  
  $("#subtitle-font-left-margin > a").height("0.8em");
  $("#subtitle-font-left-margin > a").width("0.5em");
  
  
}
