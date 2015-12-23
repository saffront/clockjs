$(document).ready( function() {
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // var year = date.getFullYear();
        // var month = date.getMonth();
        // var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        // var day = date.getDay();
        // var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  
    

        var meridiem = "AM";  // Default is AM
        
        // If hours is > than 12
        if (hours > 12) {
            hours = hours - 12; // Convert to 12-hour format
            meridiem = "PM"; // Keep track of the meridiem
        }
        // 0 AM and 0 PM should read as 12
        if (hours === 0) {
            hours = 12;    
        }


        // If the hours digit is < than 10
        if(hours < 10) {
            // Add the "0" digit to the front
            // so 9 becomes "09"
            hours = "0" + hours;
        }
        // Format minutes and seconds the same 
        if(minutes < 10) {
            minutes = "0" + minutes;
        }        
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
    
        var clockDiv = document.getElementById('clock');


        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }
    
    displayTime();
    
    // This makes our clock 'tick'
    setInterval(displayTime, 1000);

});