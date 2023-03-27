let start = document.getElementById("start");
let reset = document.getElementById("reset");

let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("sec");

// store a reference to the variable
let startTimer = null;                                            // this is an empty value and will not be declared unlike if it was set to undefined

function timer() {                                    
    if(h.value == 0 && m.value == 0 && s.value == 0) {          // if hour, minute, and second all have the value 0 then keep them at 0.
        h.value = 0;          
        m.value = 0;
        s.value = 0;
    } else if (s.value != 0) {                               // Whereas, if second does not (!=) have the value of 0 then...
      s.value--;                                            // -- is the decrement value, opposite of ++ (incremental value)
    } else if (m.value != 0 && s.value == 0) {             // if minute does not have the value of 0 and second does have the value of 0 then...
      s.value = 59;                                       // the value of second will be 59 then since it does not equal 0 it will decrement
      m.value--;                                         // the minutes will be decremented
    } else if (h.value != 0 && m.value == 0) {
      m.value = 59;
      s.value = 59;                            
      h.value--;
    }
    return;
}



function stopTimer() {                                      
  clearInterval(startTimer);
}


start.addEventListener("click", function() {
  //Initialise the variable startTimer
  function startInterval() {
    startTimer = setInterval(function() {
      timer();
    }, 1000);
  }
  startInterval()
})


// when the reset button is clicked it will set all the values to 0 and start the function stopTimer which stops the timer countdown.
reset.addEventListener("click", function() {                
  h.value = 0;
  m.value = 0;
  s.value = 0;
  stopTimer()
})