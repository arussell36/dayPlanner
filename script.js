// in the header there is a dynamic field that grabs the date


// VARIABLES
    // event to grab todays date

var time = moment().format('LLL');

// HELPER FUNCTIONS
function youSuck () {
    alert("you suck");
};

// var hour = moment().format('HH');
// console.log(hour);

var hour = moment().format('HH');
console.log(hour);
    




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

$("#clear").on("click", function(){
    // youSuck();
    localStorage.clear();

})

// INIT
    // 1. check local storage object for matching ID
    // 2. color code past present and future rows

    // function startTimer() {
    //     totalTime = 0;
    //     var setTime = 60;
    //     var timeSpent = 0;
    //     var timerDiv = $("<div>").attr("id", "time");
    //     $("#timerSpot").append(timerDiv);
    //     timerVar = setInterval(function () {      
    //         timeSpent = timeSpent + 1;
    //         totalTime = setTime - timeSpent;
    //         // console.log(totalTime);  
    //         $("#time").text(totalTime + " time left");      
    //         }, 1000);
        
    //     };


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

function timeCheck() {
    if (hour > 9) {
        $("#hourNineAM").attr("class", "rowHour color4");
            } else if (hour === 9) {
                $("#hourNineAM").attr("class", "rowHour color5");}
                    else {$("#hourNineAM").attr("class", "rowHour color1");}
    
    if (hour > 10) {
        $("#hourTenAM").attr("class", "rowHour color4");
            } else if (hour === 9) {
                $("#hourTenAM").attr("class", "rowHour color5");}
                    else {$("#hourTenAM").attr("class", "rowHour color1");}

    if (hour > 11) {
        $("#hourElevenAM").attr("class", "rowHour color4");
            } else if (hour === 9) {
                $("#hourElevenAM").attr("class", "rowHour color5");}
                    else {$("#hourElevenAM").attr("class", "rowHour color1");}
    if (hour > 12) {
        $("#hourTwelvePM").attr("class", "rowHour color4");
            } else if (hour === 9) {
                $("#hourTwelvePM").attr("class", "rowHour color5");}
                    else {$("#hourTwelvePM").attr("class", "rowHour color1");}

    if (hour > 13) {
        $("#hourOnePM").attr("class", "rowHour color4");
            } else if (hour === 9) {
                $("#hourOnePM").attr("class", "rowHour color5");}
                    else {$("#hourOnePM").attr("class", "rowHour color1");}
    if (hour > 14) {
        $("#hourTwoPM").attr("class", "rowHour color4");
            } else if (hour === 9) {
                $("#hourTwoPM").attr("class", "rowHour color5");}
                    else {$("#hourTwoPM").attr("class", "rowHour color1");}

    if (hour > 15) {
        $("#hourThreePM").attr("class", "rowHour color4");
            } else if (hour === 9) {
                $("#hourThreePM").attr("class", "rowHour color5");}
                    else {$("#hourThreePM").attr("class", "rowHour color1");}
    if (hour > 16) {
        $("#hourFourPM").attr("class", "rowHour color4");
            } else if (hour === 9) {
                $("#hourFourPM").attr("class", "rowHour color5");}
                    else {$("#hourFourPM").attr("class", "rowHour color1");}
    if (hour > 17) {
        $("#hourFivePM").attr("class", "rowHour color4");
            } else if (hour === 9) {
                $("#hourFivePM").attr("class", "rowHour color5");}
                    else {$("#hourFivePM").attr("class", "rowHour color1");}


    var timeDiv = $(`<div>${time}</div>`);
    $(".headerDetails").append(timeDiv)

}


var checking = $("#hourNineAM").val();
console.log(checking);





init();
timeCheck(); 




// NEW WAY TO DO IT!!

// var day = {};


// var key = $(this).data("key");
// var value = $(`#${key}`).val();

// day[key] = value;

// localStorage.setItem("myDay", JSON.stringify(day));

// 1. data-key in the button to target the textarea make sure the datakey is equal to the id of the text area
