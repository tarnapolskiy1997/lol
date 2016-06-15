var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$('.action-move').on('click', function(){
  $(".action-move").removeClass("js-swich-indi-active");
  $(this).addClass("js-swich-indi-active");
  if ($(this).index()==2)
  {
    $(".swich-indi").removeClass("js-move-swich-r");
    $(".swich-indi__left-to-right").removeClass("js-move-swich_r-l");
    $(".swich-indi").addClass("js-move-swich-l");
    $(".swich-indi__left-to-right").addClass("js-move-swich_l-r");
  } else { 
    $(".swich-indi").removeClass("js-move-swich-l");
    $(".swich-indi__left-to-right").removeClass("js-move-swich_l-r");
    $(".swich-indi").addClass("js-move-swich-r");
    $(".swich-indi__left-to-right").addClass("js-move-swich_r-l");
  }
});


var mag_1_1 = 49.422911;
var mag_1_2 = 26.985441;
mag_1_1 = window.localStorage.getItem("mag_1");
mag_1_2 = window.localStorage.getItem("mag_2");

if (navigator.geolocation) { //Checks if browser supports geolocation
   navigator.geolocation.getCurrentPosition(function (position) {                                                              //This gets the
     var latitude = position.coords.latitude;                    //users current
     var longitude = position.coords.longitude;                 //location
     var coords = new google.maps.LatLng(latitude, longitude); //Creates variable for map coordinates
     var coords2 = new google.maps.LatLng(mag_1_1, mag_1_2);
     const myLatLng = {lat: mag_1_1, lng: mag_1_2};
          var directionsService = new google.maps.DirectionsService();
     var directionsDisplay = new google.maps.DirectionsRenderer({
          polylineOptions: {
            strokeColor: "#4fb6de",
          }
        });
      // directionsDisplay.setOptions( { suppressMarkers: true} );
      directionsDisplay.setOptions({ preserveViewport: true });

     var mapOptions = //Sets map options
     {
       zoom: 16,  //Sets zoom level (0-21)
       center: coords, //zoom in on users location
       mapTypeControl: true, //allows you to select map type eg. map or satellite
       styles:[{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}],
       navigationControlOptions:
       {
         style: google.maps.NavigationControlStyle.SMALL //sets map controls size eg. zoom
       },
       mapTypeId: google.maps.MapTypeId.ROADMAP //sets type of map Options:ROADMAP, SATELLITE, HYBRID, TERRIAN
     };
     
     map = new google.maps.Map( /*creates Map variable*/ document.getElementById("map"), mapOptions /*Creates a new map using the passed optional parameters in the mapOptions parameter.*/);
     directionsDisplay.setMap(map);
     directionsDisplay.setPanel(document.getElementById('panel'));
     var request = {
       origin: coords,
       destination: coords2,
       travelMode: google.maps.DirectionsTravelMode.WALKING
     };

     directionsService.route(request, function (response, status) {
       if (status == google.maps.DirectionsStatus.OK) {
         directionsDisplay.setDirections(response);
       }
       $('.js-move-map_2').on('click', function(){
        map.setCenter(coords2)
      });
       $('.js-move-map_1').on('click', function(){
       map.setCenter(coords)
      });
     });
   });
 }
$('.navbar-nav li').on('click', function(){
  $(".navbar-nav li").removeClass("active");
  $(this).addClass("active");
});

// Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Populate the database 
    //
    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, link, col, count, fueltank, pover, volume, prise, plase, type, discount)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_1.jpg", "Nisan 1", "3", "1.988", "220", "54", 1853425, "1,2,3", "Nisan",15)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_2.jpg", "Nisan 2", "4", "1.987", "180", "64", 2853425, "1,2", "Nisan",15)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_3.jpg", "Nisan 3", "2", "1.986", "220", "55", 3853425, "1", "Nisan",0)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_4.jpg", "Nisan 4", "4", "1.985", "180", "54", 4853425, "1", "Nisan",0)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_5.jpg", "Nisan 5", "3", "1.984", "220", "34", 5853425, "1", "Nisan",0)');

        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_2.jpg", "Ferrari 1", "3", "1.983", "180", "42", 5853425, "1,2", "Ferrari",5)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_1.jpg", "Ferrari 2", "4", "1.982", "220", "53", 4853425, "1", "Ferrari",0)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_3.jpg", "Ferrari 3", "2", "1.981", "180", "51", 3853425, "1", "Ferrari",0)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_4.jpg", "Ferrari 4", "4", "1.980", "220", "59", 2853425, "1", "Ferrari",0)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_5.jpg", "Ferrari 5", "3", "1.979", "180", "51", 1853425, "1", "Ferrari",0)');

        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_3.jpg", "Qashqai 1", "4", "1.978", "220", "24", 2853425, "1,2", "Qashqai",10)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_2.jpg", "Qashqai 2", "2", "1.977", "180", "14", 3853425, "1", "Qashqai",5)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_1.jpg", "Qashqai 3", "3", "1.966", "220", "25", 4853425, "1", "Qashqai",5)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_4.jpg", "Qashqai 4", "4", "1.955", "180", "47", 5853425, "1", "Qashqai",0)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_5.jpg", "Qashqai 5", "2", "1.944", "220", "36", 1853425, "1", "Qashqai",0)');

        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_4.jpg", "Porsche 1", "3", "1.933", "180", "25", 5853425, "1", "Porsche",0)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_2.jpg", "Porsche 2", "2", "1.922", "220", "36", 3853425, "1", "Porsche",0)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_1.jpg", "Porsche 3", "3", "1.911", "180", "47", 853425, "1", "Porsche",0)');
        tx.executeSql('INSERT INTO DEMO (link, col, count, fueltank, pover, volume, prise, plase, type, discount) VALUES ("car_4.jpg", "Porsche 4", "2", "1.900", "220", "47", 1853425, "1", "Porsche",0)');
    }

    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log("DEMO table: " + len + " rows found.");
        var i=0;
        for (i=0; i<len; i++){

            if (results.rows.item(i).type == "Nisan") {
              $(".fotorama_1").append("<div class='content'> <img src='images/" + results.rows.item(i).link + "'><div class='discount-label yellow'><span>" + results.rows.item(i).discount + "%</span></div><a href='javascript:void(0)' data-src-count='" + results.rows.item(i).count + "' data-src-fueltank='" + results.rows.item(i).fueltank + "' data-src-pover='" + results.rows.item(i).pover + "' data-src-volume='" + results.rows.item(i).volume + "' data-src-prise='" + results.rows.item(i).prise + "' data-src-plase='" + results.rows.item(i).plase + "' class='link_but'>" + results.rows.item(i).col);
            }  else if (results.rows.item(i).type == "Ferrari") {
              $(".fotorama_2").append("<div class='content'> <img src='images/" + results.rows.item(i).link + "'><div class='discount-label yellow'><span>" + results.rows.item(i).discount + "%</span></div><a href='javascript:void(0)' data-src-count='" + results.rows.item(i).count + "' data-src-fueltank='" + results.rows.item(i).fueltank + "' data-src-pover='" + results.rows.item(i).pover + "' data-src-volume='" + results.rows.item(i).volume + "' data-src-prise='" + results.rows.item(i).prise + "' data-src-plase='" + results.rows.item(i).plase + "' class='link_but'>" + results.rows.item(i).col);
            }   else if (results.rows.item(i).type == "Qashqai") {
              $(".fotorama_3").append("<div class='content'> <img src='images/" + results.rows.item(i).link + "'><div class='discount-label yellow'><span>" + results.rows.item(i).discount + "%</span></div><a href='javascript:void(0)' data-src-count='" + results.rows.item(i).count + "' data-src-fueltank='" + results.rows.item(i).fueltank + "' data-src-pover='" + results.rows.item(i).pover + "' data-src-volume='" + results.rows.item(i).volume + "' data-src-prise='" + results.rows.item(i).prise + "' data-src-plase='" + results.rows.item(i).plase + "' class='link_but'>" + results.rows.item(i).col);
            }    else if (results.rows.item(i).type == "Porsche") {
              $(".fotorama_4").append("<div class='content'> <img src='images/" + results.rows.item(i).link + "'><div class='discount-label yellow'><span>" + results.rows.item(i).discount + "%</span></div><a href='javascript:void(0)' data-src-count='" + results.rows.item(i).count + "' data-src-fueltank='" + results.rows.item(i).fueltank + "' data-src-pover='" + results.rows.item(i).pover + "' data-src-volume='" + results.rows.item(i).volume + "' data-src-prise='" + results.rows.item(i).prise + "' data-src-plase='" + results.rows.item(i).plase + "' class='link_but'>" + results.rows.item(i).col);
            } 

        }
        $('span:contains("0%")').parent().hide();
        $('span:contains("0%")').text("0");
        $('.fotorama').lightSlider({
        item:1,
        loop:false,
        speed:600
        });  
        $('.link_but').on('click', function(){
        var img = $(this).siblings('img').attr("src");
        var link = $(this).html();
        var discount = $(this).siblings('div').children().text();
        var count = $(this).data("src-count");
        var fueltank = $(this).data("src-fueltank");
        var pover = $(this).data("src-pover");
        var volume = $(this).data("src-volume");
        var prise = $(this).data("src-prise");
        var plase = $(this).data("src-plase");

        if (discount!="0") {
          discoun1 = discount.replace('%','');
          var newprise = Math.round(prise*(100-discoun1)/100);
        }

        if (plase[2]==undefined) {plase=1} else if(plase[4]==undefined) {plase=2} else {plase=3} 
          $("#link-b a").hide() 
          var i = 0;
          while(i<plase) {
            $("#link-b a").eq(i).show();
            i++;
          }
        $("#this_link").attr("src",img);
        $("#this_newprise").text("Нова ціна: "+newprise+"грн");
        $("#this_col").text("Тип авто: "+link);
        $("#this_count").text("Кількість циліндрів: "+count);
        $("#this_fueltank").html("Робочий об'єм двигуна: "+fueltank+" см<sup>3</sup>");
        $("#this_pover").text("Макс. потужність: "+pover+" кВт");
        $("#this_volume").text("Об'єм паливного бака/резерв: "+volume+"л");
        $("#this_prise").text("Стара ціна: "+prise+"грн");
        $("#this_prise").addClass("text-line");
        if (newprise==undefined) { 
          $("#this_newprise").hide;
          $("#this_prise").removeClass("text-line");
          $("#this_prise").text("Ціна: "+prise+"грн");
        }
       

        $(".block_slider").addClass("hideSlider");
        $(".but_b").show();
        $(".block-one-car").show();
        $('.palse').on('click', function(){
          ma1 = $(this).data("mag1");
          ma2 = $(this).data("mag2");
          var num = $(this).data("num");
          var adress = $(this).data("adress");
          window.localStorage.setItem("adres", adress);
          window.localStorage.setItem("nu", num);
          window.localStorage.setItem("mag_1", ma1);
          window.localStorage.setItem("mag_2", ma2);
      });
      });
      $('.but_b').on('click', function(){
          $(".block_slider").removeClass("hideSlider");
          $(".but_b").hide();
          $(".block-one-car").hide();
      });
    }
    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(queryDB, errorCB);
    }

    // PhoneGap is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }


$(window).scroll(function () {
    var $this = $(this),
        $head = $('.main-menu');
    if ($this.scrollTop() > 1) {
       $head.addClass('fixed_header');
    } else {
       $head.removeClass('fixed_header');
    }
});

var n = window.localStorage.getItem("nu");
if (n!=null) {$("#plase-sell").text("Точка продажу №"+n);}

var ad = window.localStorage.getItem("adres");
if (ad!=null) {$(".absolut-cont-map__txt").text(ad);}
