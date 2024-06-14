function rgbToHex(e){const t=e.match(/\d+/g);if(3===t.length)var[a,r,n]=t.map(Number);return a=Math.max(0,Math.min(255,a)),r=Math.max(0,Math.min(255,r)),n=Math.max(0,Math.min(255,n)),`#${a.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}`.toUpperCase()}function getChartColorsArray(e){const t=document.getElementById(e);if(t){const a=t.dataset.chartColors;if(a)return JSON.parse(a).map((e=>{const t=e.replace(/\s/g,"");if(t.includes("#"))return t;{const e=document.querySelector(t);if(e)return window.getComputedStyle(e).backgroundColor||t;{const e=document.createElement("div");e.className=t,document.body.appendChild(e);const a=window.getComputedStyle(e);return(a.backgroundColor.includes("#")?a.backgroundColor:rgbToHex(a.backgroundColor))||t}}}));console.warn(`chart-colors attribute not found on: ${e}`)}}var chart,options={series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"SAMPLE B",data:[[36.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"SAMPLE C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}],chart:{height:350,type:"scatter",zoom:{enabled:!0,type:"xy"}},xaxis:{tickAmount:10,labels:{formatter:function(e){return parseFloat(e).toFixed(1)}}},colors:getChartColorsArray("basicScatter"),yaxis:{tickAmount:7}};function generateDayWiseTimeSeries(e,t,a){for(var r=0,n=[];r<t;){var o=Math.floor(Math.random()*(a.max-a.min+1))+a.min;n.push([e,o]),e+=864e5,r++}return n}(chart=new ApexCharts(document.querySelector("#basicScatter"),options)).render(),options={series:[{name:"TEAM 1",data:generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"TEAM 2",data:generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"TEAM 3",data:generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),30,{min:10,max:60})},{name:"TEAM 4",data:generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),10,{min:10,max:60})},{name:"TEAM 5",data:generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),30,{min:10,max:60})}],chart:{height:350,type:"scatter",zoom:{type:"xy"}},dataLabels:{enabled:!1},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},xaxis:{type:"datetime"},colors:getChartColorsArray("scatterDatetime"),yaxis:{max:70}},(chart=new ApexCharts(document.querySelector("#scatterDatetime"),options)).render(),options={series:[{name:"Messenger",data:[[16.4,5.4],[21.7,4],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7],[10.9,8.2],[16.4,4],[13.6,4.3],[13.6,12],[29.9,3],[10.9,5.2],[16.4,6.5],[10.9,8],[24.5,7.1],[10.9,7],[8.1,4.7],[19,10],[27.1,10],[24.5,8],[27.1,3],[29.9,11.5],[27.1,.8],[22.1,2]]},{name:"Instagram",data:[[6.4,5.4],[11.7,4],[15.4,3],[9,2],[10.9,11],[20.9,7],[12.9,8.2],[6.4,14],[11.6,12]]}],chart:{height:350,type:"scatter",animations:{enabled:!1},zoom:{enabled:!1},toolbar:{show:!1}},colors:getChartColorsArray("scatterImages"),xaxis:{tickAmount:10,min:0,max:40},yaxis:{tickAmount:7},markers:{size:20},fill:{type:"image",opacity:1,image:{src:["/static/images/users/user-2.jpg","/static/images/users/user-3.jpg"],width:40,height:40}},legend:{labels:{useSeriesColors:!0},markers:{customHTML:[function(){return""},function(){return""}]}}},(chart=new ApexCharts(document.querySelector("#scatterImages"),options)).render();