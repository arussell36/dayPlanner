// in the header there is a dynamic field that grabs the date


// VARIABLES
    // event to grab todays date


// HELPER FUNCTIONS
function youSuck () {
    alert("you suck");
};



// EVENTS
    // 1. clicking save button on the end of the string in each row 
    // - this should store text in local storage for whatever is in the input box

$("#saveClick9").on("click", function(){
    // youSuck();
    var event = $("#eventText9").val();
    localStorage.setItem("eventNine", event);

})

$("#saveClick10").on("click", function(){
    // youSuck();
    var event = $("#eventText10").val();
    localStorage.setItem("eventTen", event);

})

$("#saveClick11").on("click", function(){
    // youSuck();
    var event = $("#eventText11").val();
    localStorage.setItem("eventEleven", event);

})

$("#saveClick12").on("click", function(){
    // youSuck();
    var event = $("#eventText12").val();
    localStorage.setItem("eventTwelve", event);

})

$("#saveClick1").on("click", function(){
    // youSuck();
    var event = $("#eventText1").val();
    localStorage.setItem("eventOne", event);

})

$("#saveClick2").on("click", function(){
    // youSuck();
    var event = $("#eventText2").val();
    localStorage.setItem("eventTwo", event);

})

$("#saveClick3").on("click", function(){
    // youSuck();
    var event = $("#eventText3").val();
    localStorage.setItem("eventThree", event);

})

$("#saveClick4").on("click", function(){
    // youSuck();
    var event = $("#eventText4").val();
    localStorage.setItem("eventFour", event);

})

$("#saveClick5").on("click", function(){
    // youSuck();
    var event = $("#eventText5").val();
    localStorage.setItem("eventFive", event);

})

// INIT
    // 1. check local storage object for matching ID
    // 2. color code past present and future rows

function init() {
    $("#eventText9").val(localStorage.getItem("eventNine"))
    $("#eventText10").val(localStorage.getItem("eventTen"))
    $("#eventText11").val(localStorage.getItem("eventEleven"))
    $("#eventText12").val(localStorage.getItem("eventTwelve"))
    $("#eventText1").val(localStorage.getItem("eventOne"))
    $("#eventText2").val(localStorage.getItem("eventTwo"))
    $("#eventText3").val(localStorage.getItem("eventThree"))
    $("#eventText4").val(localStorage.getItem("eventFour"))
    $("#eventText5").val(localStorage.getItem("eventFive"))



};








init();






