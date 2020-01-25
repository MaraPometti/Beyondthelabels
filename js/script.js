/* script.js
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//jquery code here


    //CHANGING BACKGROUND IMAGES

   $("#wrap2").waypoint(function(direction){
      console.log(direction);

      if (direction == 'down') {
       $('.header img').attr('src', 'img/mall.jpg');
      }

      if (direction == 'up') {
       //$(".header").css({"background-image":"url(../img/photo01.jpg)"});
       $('.header img').attr('src', 'img/labels.jpg');
      }

  });

  $("#wrap3").waypoint(function(direction){
    console.log(direction);

    if (direction == 'down') {
     $('.header img').attr('src', 'img/closet.jpg');
    }

    if (direction == 'up') {

     $('.header img').attr('src', 'img/mall.jpg');

    }

});

$("#wrap6").waypoint(function(direction){
  console.log(direction);

  if (direction == 'down') {
   $('.header img').attr('src', 'img/labels.jpg');
  }

  if (direction == 'up') {

   $('.header img').attr('src', 'img/closet.jpg');
  }

});

$("#divtext").waypoint(function(direction){
  console.log(direction);

  if (direction == 'down') {
  $('.header img').attr('src', 'img/labels.jpg');
   $('.header img').css('opacity', '0.0');
  }

  if (direction == 'up') {

   $('.header img').attr('src', 'img/labels.jpg');
   $('.header img').css('opacity', '1')
  }

});



  //INTERACTIVE BAR CHART FEATURING COMPANIES DATA
  var plant = [];
  var leng = companies.length;
  for (var i = 0; i < leng; i++) {

    if (companies[i].innovation == "plant based") {

      $("#plant").append('<div class="bar" id="bar1" data-id=" ' + i + '"><div class="tag" id="tag1">'+ companies[i].companyname +'</div></div>');

    }

  }

  console.log(plant);

  $(".bar").each(function(i){
    $(this).on("mouseenter", function(){
     $('#tag1', this).fadeIn();
      });
    });

    $(".bar").each(function(i){
      $(this).on("mouseleave", function(){
       $('#tag1', this).fadeOut();
     });
   });

  var synthetic = [];
  var leng = companies.length;
  for (var i = 0; i < leng; i++) {

    if (companies[i].innovation == "synthetic fabrics") {

      $("#synthetic").append('<div class="bar" id="bar2"><div class="tag" id="tag2">'+ companies[i].companyname +'</div>');

    }

  }

  console.log(synthetic);

  $(".bar").each(function(i){
    $(this).on("mouseenter", function(){
     $('#tag2', this).fadeIn();
      });
    });

    $(".bar").each(function(i){
      $(this).on("mouseleave", function(){
       $('#tag2', this).fadeOut();
     });
   });


  var strategy = [];
  var leng = companies.length;
  for (var i = 0; i < leng; i++) {

    if (companies[i].innovation == "strategy") {

      $("#strategy").append('<div class="bar" id="bar3"><div class="tag" id="tag3">'+ companies[i].companyname +'</div>');

    }

  }

  console.log(strategy);

  $(".bar").each(function(i){
    $(this).on("mouseenter", function(){
     $('#tag3', this).fadeIn();
      });
    });

    $(".bar").each(function(i){
      $(this).on("mouseleave", function(){
       $('#tag3', this).fadeOut();
     });
   });


  var cellulosics = [];
  var leng = companies.length;
  for (var i = 0; i < leng; i++) {

    if (companies[i].innovation == "man made cellulosics") {

      $("#cellulosics").append('<div class="bar" id="bar4"><div class="tag" id="tag4">'+ companies[i].companyname +'</div>');

    }

  }

  console.log(cellulosics);
  $(".bar").each(function(i){
    $(this).on("mouseenter", function(){
     $('#tag4', this).fadeIn();
      });
    });

    $(".bar").each(function(i){
      $(this).on("mouseleave", function(){
       $('#tag4', this).fadeOut();
     });
   });


  var animal = [];
  var leng = companies.length;
  for (var i = 0; i < leng; i++) {

    if (companies[i].innovation == "animal fibers") {

      $("#animal").append('<div class="bar" id="bar5"><div class="tag" id="tag5">'+ companies[i].companyname +'</div>');

    }

  }

  console.log(animal);

  console.log(cellulosics);
  $(".bar").each(function(i){
    $(this).on("mouseenter", function(){
     $('#tag5', this).fadeIn();
      });
    });

    $(".bar").each(function(i){
      $(this).on("mouseleave", function(){
       $('#tag5', this).fadeOut();
     });
   });


  var leather = [];
  var leng = companies.length;
  for (var i = 0; i < leng; i++) {

    if (companies[i].innovation == "leather alternatives") {

      $("#leather").append('<div class="bar" id="bar6"><div class="tag" id="tag6">'+ companies[i].companyname +'</div</div>');

    }

  }

  console.log(leather);

  console.log(cellulosics);
  $(".bar").each(function(i){
    $(this).on("mouseenter", function(){
     $('#tag6', this).fadeIn();
      });
    });

    $(".bar").each(function(i){
      $(this).on("mouseleave", function(){
       $('#tag6', this).fadeOut();
     });
   });



//CHANGE BAR BORDER COLOR WHEN hover

//$(".bar").mouseenter(function(){
   //$(this).css({'border-color': 'black'});
 //});

 //$(".bar").mouseleave(function(){
  //  $(this).css({borderWidth: '0.5px'});
//  });


  //FLIPBOARDCARD

  $(".card").mouseenter( function(){
	//console.log("you got it!")
	$(".caption", this).fadeToggle();
  })

$(".card").mouseleave( function(){
	//console.log("you got it!")
	$(".caption", this).fadeToggle();
  })
  //if (navigator.userAgent.indexOf('Safari') != -1 &&
    //navigator.userAgent.indexOf('Chrome') == -1) {
      //  document.body.className += " safari";
  //  }

  //$(".card").hover(function(){
  //  $(this).find(".pic").toggleClass("flippity");
  //});

   //(function(){
    // $(this).find(".pic").removeClass("flippity");
   //}

   //);

  //$(".card").click(function(){
    //$(this).find(".pic").toggleClass("flippity");
  //});


  //QUIZ INTERACTIVE SORTABLE LABELS

  var choices = ['Animal based', 'Man-made Cellulosics', 'Cotton', 'Others', 'Synthetics'];

  var leng = choices.length;

  var neworder = [];
    $('#choicesinside').each(function(i){
      neworder[i] = Number($(this).attr('data-id'));
      console.log(neworder[i]);
    });

  for (var i=0; i<leng; i++) {
    $('#choicesinside').append (
      '<div class="options"><div class="rank" data-id=" '+ (i+1) +'" data-idnew=" ' + i +
       '"></div><p id="optiontext">' + choices[i] + '</p></div>'
    );

  }

  //make new id appear when you sort the options

  $('#choicesinside').sortable(
    {update: function(event, ui) {
      $('.rank').each(function(i){
        $(this).attr('data-id', (i+1))

      })
      console.log("done")
    }});

  // FETCH CORRET RESULT

  $('#button').click(function(){

    var correctorder = ['Synthetics 68%', 'Cotton 22%', 'Man-made Cellulosics 6%', 'Others 2.4%', 'Animal based 1.3%' ];

    $('#targetinside').html('');

    for (var i=0; i<leng; i++) {
      $('#targetinside').append(
        '<div class="options2"><h2>'+ (i +1) + '</h2><p>' + correctorder[i] + '</p></div>');
    }

  });


  //INTERACTIVE CHARTS MSI SCORE

  var buttonlist = ['MSI Score','Water Scarcity','Resource Depletion','Global Warming','Eutrophication']

    var leng = buttonlist.length

    for (var i=0; i<leng; i++) {

      $('.button').append('<div class="pick" dataimg="img/'+i+'.png" data-original=" ' + i + ' "><p> ' + buttonlist[i] + '</p></div>')

    };


    $('.pick').click(function(){

        var bin = $(this).attr("dataimg");
        $(".showme img").attr("src", bin);

        console.log(bin)

    });

    $(".pick").mouseenter(function(){
       $(this).css({borderWidth: '2px'});
     });

     $(".pick").mouseleave(function(){
        $(this).css({borderWidth: '1px'});
      });

}); //end document.ready block


//bar chart
/* script.js
   Author:
   Date:
*/
/*var dataset = {
  cotton: {
    WaterScarcity:45.1,
    GlobalWarming:2.2,
    ResourceDepletion:9.3,
    Eutrophication:14.1,
    MSIScore:93,
  },
  silk: {
    WaterScarcity:10,
    GlobalWarming:42.9,
    ResourceDepletion:36.5,
    Eutrophication:21.9,
    MSIScore:125,
  },
  viscose: {
    WaterScarcity:5.3,
    GlobalWarming:11.4,
    ResourceDepletion:10.4,
    Eutrophication:7.2,
    MSIScore:48,
  },

  ModalandLyocell: {
    WaterScarcity:5,
    GlobalWarming:14.3,
    ResourceDepletion:12.6,
    Eutrophication:7.7,
    MSIScore:53,
  },

  Elastane: {
    WaterScarcity:3.3,
    GlobalWarming:9.6,
    ResourceDepletion:11.6,
    Eutrophication:5.8,
    MSIScore:43,
  },

  Polyester: {
    WaterScarcity:2.7,
    GlobalWarming:8.4,
    ResourceDepletion:9.6,
    Eutrophication:4.3,
    MSIScore:40,
  },

  Acrylic: {
    WaterScarcity:0,
    GlobalWarming:9.1,
    ResourceDepletion:11.5,
    Eutrophication:10.3,
    MSIScore:46,
  },

  BastFibres: {
    WaterScarcity:0,
    GlobalWarming:14.8,
    ResourceDepletion:21.9,
    Eutrophication:26.2,
    MSIScore:80,
  },

  Nylon: {
    WaterScarcity:0,
    GlobalWarming:15.3,
    ResourceDepletion:14.3,
    Eutrophication:9.4,
    MSIScore:55,
  },

  Wool: {
    WaterScarcity:0,
    GlobalWarming:40.2,
    ResourceDepletion:9.1,
    Eutrophication:13.5,
    MSIScore:79,
  },

}*/
/*var dataset = [{"Fabric":"Cotton","WaterScarcity":45.1,"GlobalWarming":12.2,"ResourceDepletion":9.3,"Eutrophication":14.1,"MSIScore":93},
{"Fabric":"Silk","WaterScarcity":10,"GlobalWarming":42.9,"ResourceDepletion":36.5,"Eutrophication":21.9,"MSIScore":125},
{"Fabric":"Viscose","WaterScarcity":5.3,"GlobalWarming":11.4,"ResourceDepletion":10.4,"Eutrophication":7.2,"MSIScore":48},
{"Fabric":"Modal and Lyocell","WaterScarcity":5,"GlobalWarming":14.3,"ResourceDepletion":12.6,"Eutrophication":7.7,"MSIScore":53},
{"Fabric":"Elastane","WaterScarcity":3.3,"GlobalWarming":9.6,"ResourceDepletion":11.6,"Eutrophication":5.8,"MSIScore":43},
{"Fabric":"Polyester","WaterScarcity":2.7,"GlobalWarming":8.4,"ResourceDepletion":9.6,"Eutrophication":4.3,"MSIScore":40},
{"Fabric":"Acrylic","WaterScarcity":0,"GlobalWarming":9.1,"ResourceDepletion":11.5,"Eutrophication":10.3,"MSIScore":46},
{"Fabric":"Bast Fibres","WaterScarcity":0,"GlobalWarming":14.8,"ResourceDepletion":21.9,"Eutrophication":26.2,"MSIScore":80},
{"Fabric":"Nylon","WaterScarcity":0,"GlobalWarming":15.3,"ResourceDepletion":14.3,"Eutrophication":9.4,"MSIScore":55},
{"Fabric":"Wool","WaterScarcity":0,"GlobalWarming":40.2,"ResourceDepletion":9.1,"Eutrophication":13.5,"MSIScore":79}]*/



/*dataset.forEach(function(d) {
          d.WaterScarcity = d.WaterScarcity;
          d.GlobalWarming = +d.GlobalWarming;
          d.ResourceDepletio = +d.ResourceDepletio;
          d.Eutrophication = +d.Eutrophication;
          d.MSIScore = +d.MSIScore;
        });*/

var fabrics = ["cotton","silk","viscose","modalandlyocell","elastane","polyester","acrylic","bastfibres","nylon","wool"];

//var fabric = ["cotton", "Silk", "Viscose", "ModalandLyocell", "Elastane", "Polyester", "Acrylic", "BastFibres", "Nylo", "Wool"];

var fileName = "fabrics_pollution.csv";


d3.csv(fileName, function(error, data){
  
  var effectMap = {};

  data.forEach(function(d) {

    var effect = d.effect;

    effectMap[effect] = [];

    fabrics.forEach(function(field){
      effectMap[effect].push(+d[field]);
    });

  });

  makeVis(effectMap);
});

var makeVis = function(effectMap) {


  var margin = {top: 30, right: 100, bottom: 100, left: 50},
    w = 600 - margin.left - margin.right,
    h = 500 - margin.top - margin.bottom;



  var yScale = d3.scaleLinear()
        .range([h, 0]);


  var xScale = d3.scaleBand()
          .domain(fabrics)
          .rangeRound([0, w])
          .paddingInner(0.3);

  var svg = d3.select(".cont")
        .append("svg")
        .attr("width", w + margin.left + margin.right)
        .attr("height", h + margin.top + margin.bottom)
        
  var artboard = svg.append("g")
          .attr("transform", "translate(" + margin.left +","+ margin.top +")");

        
  var xAxis = d3.axisBottom(xScale)
        .tickSizeOuter(0);
        
  //var captainNames = ["Water Scarcity", "Global Warming", "Resource Depletion", "Eutrophication", "MSI Score"];

  artboard.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + h + ")")
      .call(xAxis)
      .selectAll("text")
      .attr("class", "labels")
      .style("text-anchor", "end")
      .attr("x", -10)
      .attr("y", -3)
      .attr("transform", "rotate(-70)" );
        

  var yAxis = d3.axisLeft()
      .scale(yScale)
      .tickFormat(d3.format(",.0f"))
      .ticks(5);
      

    var yAxisUpdate = artboard.append("g")
      .attr("class", "y axis")
      .call(yAxis);

      yAxisUpdate.append("text")
        .attr("transform", "rotate(-90)")
        .attr("class", "labelsy")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Value");

  var tooltip = d3.select(".cont")
                .append("div")
                .attr("class", "tooltip")
                .style("pointer-events", "none")
                .style("opacity", 0);

  
  var updateBars = function(data) {

    yScale.domain(d3.extent(data));
    /*yScale.domain(d3.extent(data, function(data){
      return d3.max([0, data]);
    }));*/
    
    yAxisUpdate.call(yAxis);

    var bars =  artboard.selectAll("rect").data(data);

    bars.enter()
      .append("rect")
      .attr("class", "rect")
      .attr("x", function(d, i) {
          return xScale(fabrics[i]);
      })
      .attr("width", xScale.bandwidth())
      .attr("y", function(d,i) {
          return yScale(d);
      })
      .attr("height", function(d, i) {
          return h - yScale(d);
      })
      .attr("fill", "#5a3ec8")
      .on("mouseenter", function(d, i) {   

               tooltip.style("opacity", .75);

               tooltip.html(
                "<div>Fabric: <strong>" + fabrics[i] + "</strong></div>" +
                "<div>Value: <strong>" + d + "</strong></div>"
              )

              .style("left", (d3.event.pageX + 10) + "px")
              .style("top", (d3.event.pageY - 28) + "px");
          })
          .on("mouseout", function(d) {
             tooltip.style("opacity", 0);
          });

    

    bars.transition()
      .duration(250)
      .attr("y", function(d,i) { return yScale(d); })
            .attr("height", function(d,i) { return h - yScale(d); });

        bars.exit().remove();

  };


  var dropdownChange = function() {

    var newEffect = d3.select(this).property("value");
      newData = effectMap[newEffect];

    updateBars(newData);
  }


  var effects = Object.keys(effectMap).sort();

  var dropdown = d3.select("#drop")
          .append("select")
          .attr("class", "selector")
          .on ("change", dropdownChange);


  dropdown.selectAll("option")
      .data(effects)
      .enter()
      .append("option")
      .attr("class", "optext")
      .attr("value", function(d){
        return d;
      })
      .text(function (d){
        return d[0].toUpperCase() + d.slice(1,d.length);
      });

  /*dropdown.selectAll(".optext")
      .data(captainNames)
      .enter()
      .text(function (d, i){
        return captainNames;
      });
      //.text(function(d, i) {
        //return captainNames[i];   
      //});*/

  var initialData = effectMap[ effects[0] ];
  updateBars(initialData);

};


            







