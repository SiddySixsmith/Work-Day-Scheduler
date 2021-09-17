var today = moment().format("dddd MMM YYYY")
$("#currentDay").text(today)

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        // Get nearby values of the description
        var text = $(this).siblings(".text-input").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background notices
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get value from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})

$(".clearBtn").on("click", function() {
    window.localStorage.removeItem('hour8');
    window.localStorage.removeItem('hour9');
    window.localStorage.removeItem('hour10');
    window.localStorage.removeItem('hou11');
    window.localStorage.removeItem('hou12');
    window.localStorage.removeItem('hour13');
    window.localStorage.removeItem('hour14');
    window.localStorage.removeItem('hour15');
    window.localStorage.removeItem('hour16');
    window.localStorage.removeItem('hour17');

    document.getElementById("description").value = ' ';

})