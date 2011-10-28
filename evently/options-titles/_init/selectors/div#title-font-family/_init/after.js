function(){
  var familySelect = $("select#title-font-family", this);
  var typeSelect = $("select#title-typeface", this);
  var textSelect = $("p#title-text-input", this);
  
  var fontLink = "http://fonts.googleapis.com/css?family=";
  var rel = "stylesheet";
  var type = "text/css";
  var addedStyles = {};
  var fonts = {Cantarell:{alt:'serif',designer:'Dave Crossland',designerUrl:'/webfonts/designer?designer=Dave+Crossland',familyUrl:'Cantarell',url:'http://fonts.googleapis.com/css?family=Cantarell:regular,italic,bold,bolditalic'},Cardo:{alt:'serif',designer:'David Perry',designerUrl:'/webfonts/designer?designer=David+Perry',familyUrl:'Cardo',url:'http://fonts.googleapis.com/css?family=Cardo:regular'},'Crimson Text':{alt:'serif',designer:'Sebastian Kosch',designerUrl:'/webfonts/designer?designer=Sebastian+Kosch',familyUrl:'Crimson Text',url:'http://fonts.googleapis.com/css?family=Crimson+Text:regular'},'Droid Sans':{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer=Steve+Matteson',familyUrl:'Droid Sans',url:'http://fonts.googleapis.com/css?family=Droid+Sans:regular,bold'},'Droid Sans Mono':{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer=Steve+Matteson',familyUrl:'Droid Sans Mono',url:'http://fonts.googleapis.com/css?family=Droid+Sans+Mono:regular'},'Droid Serif':{alt:'serif',designer:'Steve Matteson',designerUrl:'/webfonts/designer?designer=Steve+Matteson',familyUrl:'Droid Serif',url:'http://fonts.googleapis.com/css?family=Droid+Serif:regular,italic,bold,bolditalic'},'IM Fell DW Pica':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer=Igino+Marini',familyUrl:'IM Fell DW Pica',url:'http://fonts.googleapis.com/css?family=IM+Fell+DW+Pica:regular,italic'},'IM Fell DW Pica SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer=Igino+Marini',familyUrl:'IM Fell DW Pica SC',url:'http://fonts.googleapis.com/css?family=IM+Fell+DW+Pica+SC:regular'},'IM Fell Double Pica':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer=Igino+Marini',familyUrl:'IM Fell Double Pica',url:'http://fonts.googleapis.com/css?family=IM+Fell+Double+Pica:regular,italic'},'IM Fell Double Pica SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer=Igino+Marini',familyUrl:'IM Fell Double Pica SC',url:'http://fonts.googleapis.com/css?family=IM+Fell+Double+Pica+SC:regular'},'IM Fell English':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer=Igino+Marini',familyUrl:'IM Fell English',url:'http://fonts.googleapis.com/css?family=IM+Fell+English:regular,italic'},'IM Fell English SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer=Igino+Marini',familyUrl:'IM Fell English SC',url:'http://fonts.googleapis.com/css?family=IM+Fell+English+SC:regular'},'IM Fell French Canon':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer=Igino+Marini',familyUrl:'IM Fell French Canon',url:'http://fonts.googleapis.com/css?family=IM+Fell+French+Canon:regular,italic'},'IM Fell French Canon SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer=Igino+Marini',familyUrl:'IM Fell French Canon SC',url:'http://fonts.googleapis.com/css?family=IM+Fell+French+Canon+SC:regular'},'IM Fell Great Primer':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer=Igino+Marini',familyUrl:'IM Fell Great Primer',url:'http://fonts.googleapis.com/css?family=IM+Fell+Great+Primer:regular,italic'},'IM Fell Great Primer SC':{alt:'serif',designer:'Igino Marini',designerUrl:'/webfonts/designer?designer=Igino+Marini',familyUrl:'IM Fell Great Primer SC',url:'http://fonts.googleapis.com/css?family=IM+Fell+Great+Primer+SC:regular'},Inconsolata:{alt:'serif',designer:'Raph Levien',designerUrl:'/webfonts/designer?designer=Raph+Levien',familyUrl:'Inconsolata',url:'http://fonts.googleapis.com/css?family=Inconsolata:regular'},'Josefin Sans Std Light':{alt:'serif',designer:'Santiago Orozco',designerUrl:'/webfonts/designer?designer=Santiago+Orozco',familyUrl:'Josefin Sans Std Light',url:'http://fonts.googleapis.com/css?family=Josefin+Sans+Std+Light:regular'},Lobster:{alt:'serif',designer:'Pablo Impallari',designerUrl:'/webfonts/designer?designer=Pablo+Impallari',familyUrl:'Lobster',url:'http://fonts.googleapis.com/css?family=Lobster:regular'},Molengo:{alt:'serif',designer:'Denis Jacquerye',designerUrl:'/webfonts/designer?designer=Denis+Jacquerye',familyUrl:'Molengo',url:'http://fonts.googleapis.com/css?family=Molengo:regular'},Nobile:{alt:'serif',designer:'Vernon Adams',designerUrl:'/webfonts/designer?designer=Vernon+Adams',familyUrl:'Nobile',url:'http://fonts.googleapis.com/css?family=Nobile:regular,italic,bold,bolditalic'},'OFL Sorts Mill Goudy TT':{alt:'serif',designer:'Barry Schwartz',designerUrl:'/webfonts/designer?designer=Barry+Schwartz',familyUrl:'OFL Sorts Mill Goudy TT',url:'http://fonts.googleapis.com/css?family=OFL+Sorts+Mill+Goudy+TT:regular,italic'},'Old Standard TT':{alt:'serif',designer:'Alexey Kryukov',designerUrl:'/webfonts/designer?designer=Alexey+Kryukov',familyUrl:'Old Standard TT',url:'http://fonts.googleapis.com/css?family=Old+Standard+TT:regular,italic,bold'},'Reenie Beanie':{alt:'serif',designer:'James Grieshaber',designerUrl:'/webfonts/designer?designer=James+Grieshaber',familyUrl:'Reenie Beanie',url:'http://fonts.googleapis.com/css?family=Reenie+Beanie:regular'},Tangerine:{alt:'serif',designer:'Toshi Omagari',designerUrl:'/webfonts/designer?designer=Toshi+Omagari',familyUrl:'Tangerine',url:'http://fonts.googleapis.com/css?family=Tangerine:regular'},Vollkorn:{alt:'serif',designer:'Friedrich Althausen',designerUrl:'/webfonts/designer?designer=Friedrich+Althausen',familyUrl:'Vollkorn',url:'http://fonts.googleapis.com/css?family=Vollkorn:regular,bold'},'Yanone Kaffeesatz':{alt:'serif',designer:'Yanone',designerUrl:'/webfonts/designer?designer=Yanone',familyUrl:'Yanone Kaffeesatz',url:'http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:200,300,400,700'}};
  //var style = $$("#options-titles").titleStyle;
//  
  familySelect.change(function(){
    var famLink="";
    var famText = $(this).val();
    var fam = $(this).val().split(" ");
     
    for(var i=0; i<fam.length; i++){
      if(fam[i+1]!=undefined) famLink = famLink + fam[i] + "+";
      else famLink = famLink + fam[i];
    }

    var headID = document.getElementsByTagName("head")[0];         
    var cssNode = document.createElement('link');   
    cssNode.href = fonts[famText]["url"];
    cssNode.rel = 'stylesheet';
    cssNode.type = 'text/css';
    if(addedStyles[famText]==undefined) {
      headID.appendChild(cssNode); 
      addedStyles[famText] = true;
    }
        
    $$("#options-titles").titleStyle["fontFamily"] = famText;
    $("#chartpreview").trigger("optionsChanged", ["title", "style", $$("#options-titles").titleStyle]);
    
  });
  
  typeSelect.change(function(){
    if($(this).val()=="Regular"){
      $$("#options-titles").titleStyle["fontWeight"] = 400;
      $$("#options-titles").titleStyle["fontStyle"] = "normal";
    }
    
    else if($(this).val()=="Italic"){
      $$("#options-titles").titleStyle["fontWeight"] = 400;
      $$("#options-titles").titleStyle["fontStyle"] = "italic";
    }
    
    else if($(this).val()=="Bold"){
      $$("#options-titles").titleStyle["fontWeight"] = 700;
      $$("#options-titles").titleStyle["fontStyle"] = "normal";
    }
    
    else if($(this).val()=="Bold Italic"){
      $$("#options-titles").titleStyle["fontWeight"] = 700;
      $$("#options-titles").titleStyle["fontStyle"] = "italic";
    }
    
    $("#chartpreview").trigger("optionsChanged", ["title", "style", $$("#options-titles").titleStyle]);
    
  });
  
  //code for sliders
  $("#title-font-size").slider({
    min: 0,
    max: 200,
    value: 0,
    stop: function(event, ui){
      $$("#options-titles").titleStyle["fontSize"] = ui.value+"pt";
      $("#chartpreview").trigger("optionsChanged", ["title", "style", $$("#options-titles").titleStyle]);
      //console.log("options-titles/div#title-font-family/init", $$("#options-titles").titleStyle);
    }    
  });
  
  
  //code for color palettes
  var colort;
  $("#title-font-color").farbtastic(
    function callback(color){
      //console.log(color);
      $("#title-font-color-placeholder").css("background-color", color);
      colort = color;
    }
  );
  $("#title-font-color-placeholder").click(function(){
    $("#title-font-color").toggle();
  })
  $("#title-font-color-submit").click(function(){
    //color = $("#chart-border-color-placeholder").css("background-color");
    $$("#options-titles").titleStyle["color"] = colort;
		$("#chartpreview").trigger("optionsChanged", ["title", "style", $$("#options-titles").titleStyle]);
  })
  
  //sliders code
  $("#title-font-top-margin").slider({
    min: 0,
    max: 500,
    value: 0,
    stop: function(event, ui){;
      $$("#options-titles").titleStyle["top"] = ui.value + "px";
    	$$("#options-titles").titleStyle["bottom"] = "auto";
      $("#chartpreview").trigger("optionsChanged", ["title", "style", $$("#options-titles").titleStyle]);
    }    
  });
  $("#title-font-left-margin").slider({
    min: 0,
    max: 1500,
    value: 0,
    stop: function(event, ui){
    	$$("#options-titles").titleStyle["left"] = ui.value + "px";
    	$$("#options-titles").titleStyle["right"] = "auto";
      $("#chartpreview").trigger("optionsChanged", ["title", "style", $$("#options-titles").titleStyle]);
    }  
  });
  
  textSelect.click(function(e){
  	e.preventDefault();
  	var val = $("#title-text").val();
  	$("#chartpreview").trigger("optionsChanged", ["title", "text", val]);
  })
  
  $("#title-font-size > a").height("0.8em");
  $("#title-font-size > a").width("0.5em");
  
  $("#title-font-top-margin > a").height("0.8em");
  $("#title-font-top-margin > a").width("0.5em");
  
  $("#title-font-left-margin > a").height("0.8em");
  $("#title-font-left-margin > a").width("0.5em");
}
