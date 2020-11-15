$(document).ready(function(){
    var myJson = {"name": "Supreet", "age": 21, "city":"Montreal"};
    $("h2").html(myJson.name + ", " + myJson.age + ", " + myJson.city);
});
