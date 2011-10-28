function(){  

  var defaultOptions = {
   chart: {
      renderTo: "chartpreview",
      defaultSeriesType: 'line',
      //margin: [50, 150, 60, 80],
     // backgroundcolor: rgb(156, 73, 73)
   },
   credits: {
   
   },
   
   title: {
      text: 'Monthly Average Temperat',
      style: {
         //margin: '10px 100px 0 0', // center it
         fontSize: "20px"
      }
   },
   subtitle: {
      text: 'Source: WorldClimate.com',
      style: {
         margin: '0 100px 0 0' // center it
      }
   },
   xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {
         text: 'Month'
      },
      //alternateGridColor: "#C0C0C0"
   },
   yAxis: {
      title: {
         text: 'Temperature (Â°C)'
      },
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }],
      //alternateGridColor: "#C0C0C0"
   },
   tooltip: {
      formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
            this.x +': '+ this.y +'Â°C';
      }
   },
   
   plotOptions: {
   
   },
   legend: {
      layout: 'vertical',
      style: {
         left: 'auto',
         bottom: 'auto',
         right: '10px',
         top: '100px'
      }
   },
   series: [{
      name: 'Tokyo',
      color: "red",
      size: 100,
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
   }, {
      name: 'New York',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
   }, {
      name: 'Berlin',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
   }, {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
   }]
  };
  
  $$(this).chartOptions = defaultOptions;
  $$(this).chart = new Highcharts.Chart(defaultOptions);
  //console.log("local", chartOptions, "application", $$(this).chartOptions, "chart obj", $$(this).chart )
  
}
