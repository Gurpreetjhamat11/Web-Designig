function submitFormData() {
    var userName = $("#name").val();
    var rollNumber = $("#rollNo").val();
    var mobile = $("mobile").val();
    var email = $("#email").val();
    $("#board").empty();
    displayInformation(userName, rollNumber, mobile, email);
}

function displayInformation(userName, rollNumber, mobile, email) {
    $("#board").append("<li>Name: " + userName + "</li>");
    $("#board").append("<li>Roll Number: " + rollNumber + "</li>");
    $("#board").append("<li>Phone Number: " + mobile + "</li>");
    $("#board").append("<li>Email id: " + email + "</li>");
}
