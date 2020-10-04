let myCalendar = {
    "7 AM": "",
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
    "6 PM": "",
};  

    // gets current time and day information and displays on html
var currentDay = $("#currentDay");
    currentDay = moment().format('MMMM Do YYYY, h:mm:ss a'); 
    $("#currentDay").text(currentDay);