//this is the function of checking the credentials of the form
function checkCreds() {
    //this sets the variable of the first name by getting the input field for first name
    var firstName = document.getElementById("firstName").value;
    //this sets the variable of the last name by getting the input field for the last name
    var lastName = document.getElementById("lastName").value;
    //this sets the variable of the badge number by getting the input field for the badge number
    var badgeNum = document.getElementById("badgeNum").value;
    //this sets the variable of the first and last name together
    var eventInfo = firstName + " " + lastName;
    //this if statement says if its greater than 20 or less than 4 you get an alert message
    if (eventInfo.length >20 || eventInfo.length <4) {
        alert("First and Last name has invalid number of characters!!")
        document.getElementById("loginStatus").innerHTML = "First and Last name has invalid number of characters!!";
    }
    //this else if statement says if its between 20 and 4 it gives an alert message
    else if (badgeNum > 20 || badgeNum <4) {
        alert("Badge ID is an invalid number!!")
        document.getElementById("loginStatus").innerHTML = "Badge ID is an invalid number!!";
    }
    //if either statements are true they allow access and change the page
    else {
        alert("Access Granted, Welcome Agent " + eventInfo + "!");
        location.replace("Agent.html");
    }
}