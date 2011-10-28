// $.couch.app() loads the design document from the server and 
// then calls our application.
$.couch.app(function(app) {  

  //$("#account").evently("account", app);  
  $("#chartpreview").evently("chartPreview", app);
  $("#options-chart").evently("options-chart", app);
//  $("#options-legend").evently("options-legend", app);
  $("#options-titles").evently("options-titles", app);
//  $("#options-subtitles").evently("options-subtitles", app);
//  $("#options-xAxis").evently("options-xAxis", app);
//  $("#options-yAxis").evently("options-yAxis", app);
  //$("#chart-color").evently("colorPalette", app);
  
  $.tools.tabs.addEffect("kobe", function(tabIndex, done) {

	// hide all panes and show the one that is clicked
	this.getPanes().hide().eq(tabIndex).slideDown(1200);
	//this.getPanes().hide().eq(tabIndex).css("border", "3px solid orange");

	// the supplied callback must be called after the effect has finished its job
	done.call();
  });
  	//$("#accordion").tabs("#accordion div.pane", {tabs: 'h2', effect: 'slide', initialIndex: null});
  	$("ul.css-tabs").tabs("div#designer-container > div");
  
  	//$("#options_credits").evently("chartCredits", app);
  	//$("#options_legend").evently("chartLegend", app);

});
