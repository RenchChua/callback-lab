// your code here:

var stopwatch = {
  seconds: 0,
  timerId: 0,
  start: document.getElementById('start'),
  pause: document.getElementById('pause'),
  reset: document.getElementById('reset'),
  updateTime: function(){
    this.seconds ++;
    timer.innerHTML = "Time elapsed " + this.seconds;
    console.log(this.seconds);
  },

  clickStart: function(){
    // borrowUpdateTime = this.updateTime.bind(this);
    this.start.addEventListener('click', function(){
       eventTimerId = setInterval(this.updateTime.bind(this), 1000);
    }.bind(this));
  },

  clickPause: function(){
    this.pause.addEventListener('click', function(){
      clearInterval(eventTimerId);
    }.bind(this));
  },

  clickReset: function(){
    this.reset.addEventListener('click', function(){
      clearInterval(eventTimerId);
      this.seconds = 0;
      timer.innerHTML = "Stop Watch";
    }.bind(this));
  },

  stopwatchFn: function(){
    this.clickStart();
    this.clickPause();
    this.clickReset();
  }
};

stopwatch.stopwatchFn();

//
// function stopWatchAndButtons(){
//
//   startingTime = stopWatch.getSeconds());
//
//   function updateTime(startingTime) {
//     timerResult = setInterval(increaseBySecond,1000);
//   }
//
//
//   // var initialTime = stopWatch.getSeconds;
//   //
//   // var boundInitialTime = initialTime.bind(stopWatch);
//   // var startingTime = 0
//   // // var startingTime = boundInitialTime();
//   //
//   // function clickResetBtn(){
//   //   resetBtn.addEventListener('click', function(){
//   //     pauseTimer();
//   //     document.getElementById('timer').innerText = "Stop Watch";
//   //     console.log(startingTime);
//   //     startingTime = 0;
//   //   });
//   // }
//   //
//   // clickResetBtn();
//   //
//   // function clickStartbtn(){
//   //   startBtn.addEventListener('click', updateTime)
//   // }
//   //
//   // clickStartbtn();
//   //
//   // function clickPauseBtn(){
//   //   pauseBtn.addEventListener('click', function(){
//   //     pauseTimer()
//   //   });
//   // }
//   //
//   // clickPauseBtn();
//   //
//   // function updateTime(startingTime) {
//   //   timerResult = setInterval(increaseBySecond,1000);
//   // }
//   //
//   // function increaseBySecond(){
//   //   document.getElementById('timer').innerText = startingTime ++
//   // }
//   //
//   // function pauseTimer(){
//   //   clearInterval(timerResult);
//   // }
//
// }
//
// stopWatchAndButtons();
