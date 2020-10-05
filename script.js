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

    // waits until page is ready for js to run functions
$(document).ready(function() {
    if(!localStorage.getItem('myCalendar')) {
        updateCalendar(myCalendar);
      } else {
        updateCalendar(JSON.parse(localStorage.getItem('myCalendar')));
      }

    //  adjusts the color to time slot with current data
      let counter = 1
      for(const property in myCalendar) {
      let textInput = "#textinput" + counter;
      $(textInput).text(myCalendar[property]);
      let calendarTime = "#time" + counter;
      let nowTime = moment().hour();
      let timeString = $(calendarTime).text();
      let timeNumber = changeHourToNumber(timeString);
      if(timeNumber < nowTime) {
          $(textInput).addClass("past");
      } else if (timeNumber > nowTime) {
          $(textInput).addClass("future");
      } else if (timeNumber === nowTime) {
          $(textInput).addClass("present");
      }
      counter ++;
  
      }

 // saves input data and saves to local storge

    $("button").click(function() {
        taskValue = $(this).siblings("textarea").val(); // textarea is a sibling of button being referenced above, which is why the "this" works here, it's finding the next sibling referenced as that
        hourString = $(this).siblings("div").text(); // div is a sibling of button being referenced above, which is why the "this" works here, it's finding the next div referenced as that
        //calling the save task function
        saveTask(hourString, taskValue);
    });

// changes hours to numbers for greater than and equal to
    function changeHourToNumber(hourString) {
        switch(hourString) {
            case "7 AM": return 7;
            case "8 AM": return 8;
            case "9 AM": return 9;
            case "10 AM": return 10;
            case "11 AM": return 11;
            case "12 PM": return 12;
            case "1 PM": return 13;
            case "2 PM": return 14;
            case "3 PM": return 15;
            case "4 PM": return 16;
            case "5 PM": return 17;
            case "6 PM": return 18;
        }
    }

    function startStorage() {
        localStorage.setItem('myCalendar', JSON.stringify(myCalendar));
    };

    function saveLocalStorage(dayInput) {
        localStorage.setItem('myCalendar', JSON.stringify(dayInput));
    }

    function saveTask(hourString, val) {
        if(!localStorage.getItem('myCalendar')) {
            startStorage();
        }

        let calendarHours = JSON.parse(localStorage.getItem('myCalendar'));
        calendarHours[hourString] = val

        saveLocalStorage(calendarHours);
    }

    function updateCalendar(dayObject) {
        $(".row").each(function(index) {
            let res = $(this).children("div");
            $(this).children("textinput").text(dayObject[res.text()]);
        })
    }

}
)
