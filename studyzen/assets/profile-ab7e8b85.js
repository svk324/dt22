import{A as r}from"./apexcharts.common-ac06378e.js";import{c as e}from"./colors-91534213.js";var o={chart:{height:320,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",borderRadius:6,columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2},colors:[e.indigo[500],e.cyan[500]],series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},legend:{show:!1},yaxis:{show:!0,showAlways:!0,showForNullSeries:!0,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,forceNiceScale:!1,floating:!1,decimalsInFloat:void 0,labels:{show:!0}},grid:{padding:{bottom:5}},tooltip:{y:{formatter:function(a){return"$ "+a+" thousands"}}}},t=new r(document.querySelector("#earning_report"),o);t.render();
