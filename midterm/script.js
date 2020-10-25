$("#form").submit(function(e){
    e.preventDefault();
});

function submitData() {
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let phone = $("#phone").val();
    let studentId = $("#studentId").val();
    let address = $("#address").val();
    let age = $("#age").val();
    let vehicle = $(".radio:checked").val();
    let gender = $( "#gender option:selected" ).val();
    let life = $( "#life option:selected" ).val();
    let group = $("#bloodGroup option:selected")
    $("#displayArea").empty();
    appendData(firstName, lastName, phone, studentId, address, age, vehicle, gender, life, group);
}
// console.log($("displayArea"))
function appendData(firstName, lastName, phone, studentId, address, age, vehicle, gender, life, group){
    $("#displayArea").append(`<li>First Name: ${firstName}</li>`);
    $("#displayArea").append(`<li>Last Name: ${lastName}</li>`);
    $("#displayArea").append(`<li>Phone Number: ${phone}</li>`);
    $("#displayArea").append(`<li>Student Id: ${studentId}</li>`);
    $("#displayArea").append(`<li>Address: ${address}</li>`);
    $("#displayArea").append(`<li>Age: ${age}</li>`);
    $("#displayArea").append(`<li>Own a car: ${vehicle}</li>`);
    $("#displayArea").append(`<li>Gender: ${gender}</li>`);
    $("#displayArea").append(`<li>Martial Status: ${life}</li>`);
    $("#displayArea").append(`<li>Blood Group: ${group}</li>`);
    // console.log('appendData')
    // console.log(firstName, lastName, phone, studentId, address, age, vehicle, gender, life)
}    
