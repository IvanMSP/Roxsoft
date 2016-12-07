var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
   odometer.innerHTML = 1564367;
  
  },
   offset: '65%'
})
var waypoint2 = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
   odometerJuegos.innerHTML = 120;
  
  },
   offset: '65%'
})
var waypoint3 = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
   odometerTech.innerHTML = 100;
  
  },
   offset: '65%'
})
var waypoint4 = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
   odometerHoras.innerHTML = 19;
  
  },
   offset: '65%'
});

$("#quienes").click(function() {
    $('html, body').animate({
        scrollTop: $("#nosotros").offset().top
    }, 2000);
});
$("#services").click(function() {
    $('html, body').animate({
        scrollTop: $("#serviciosDiv").offset().top
    }, 2000);
});
$("#contacto").click(function() {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 2000);
});
$("#contactanos").click(function() {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 2000);
});
$("#desarrollo").click(function() {
    $('html, body').animate({
        scrollTop: $("#desarrolloDiv").offset().top
    }, 2000);
});
	 
