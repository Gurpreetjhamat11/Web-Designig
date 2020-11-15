$(document).ready(function(){
  $("#dblclick").dblclick(function(){
    alert("The div was double-clicked.");
  });
});

$(document).ready(function(){
  $(document).mousemove(function(event){
    $("span").text(event.pageX + ", " + event.pageY);
  });
});

$(document).ready(function(){
  $("#mousedown").mousedown(function(){
    $(this).after("<p style='color:green;'>Mousedown function is working.</p>");
  });
});

$(document).ready(function(){
  $("#mouseenter").mouseenter(function(){
    $("#mouseenter").css("background-color", "black");
    $("#mouseenter").css("color", "white");
  });
});