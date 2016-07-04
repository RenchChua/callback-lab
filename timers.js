// your code here:
function stopWatchAndButtons(){
  var resetBtn = document.getElementById('reset');
  var startBtn = document.getElementById('start');
  var pauseBtn = document.getElementById('pause');
  var timerResult;

  var stopWatch = {
    seconds: 0,
    timerId: "timer",
    getSeconds: function(){return this.seconds;}
  };

  var initialTime = stopWatch.getSeconds;

  var boundInitialTime = initialTime.bind(stopWatch);
  var startingTime = boundInitialTime();

  function clickResetBtn(){
    resetBtn.addEventListener('click', function(){
      pauseTimer();

    });
  }



  function clickStartbtn(){
    startBtn.addEventListener('click', timer)
  }

  clickStartbtn();

  function clickPauseBtn(){
    pauseBtn.addEventListener('click', function(){
      pauseTimer()
    });
  }

  clickPauseBtn();

  function timer() {
    timerResult = setInterval(increaseBySecond,1000);
  }

  function increaseBySecond(){
    document.getElementById('timer').innerText = startingTime ++
  }

  function pauseTimer(){
    clearInterval(timerResult);
  }


  //
  // var stopWatch = {
  //   seconds: 0,
  //   timerId: "timer",
  //   updateTime: function(seconds){
  //     this.seconds = setInterval(increaseBySecond, 100);
  //   }
  // };
  //
  // function increaseBySecond(seconds){
  //   seconds += 1;
  // }
  //
  // // function increaseBySecond(seconds){
  // //   console.log(this);
  // //   this.seconds ++;
  // // }
  //
  // // function timer(seconds, timerId){
  // //   this.seconds = seconds;
  // //   this.timerId = timerId;
  // //   function updateTime(){
  // //     setInterval(increaseBySecond(seconds), 100);
  // //   };
  // //   function increaseBySecond(seconds){
  // //     seconds += 1;
  // //   }
  // // }
  //
  // function getUpdatedTime(seconds, callback, callbackObj){
  //   callback.apply(callbackObj, [seconds]);
  // }
  //
  //
  // getUpdatedTime(0, stopWatch.updateTime, stopWatch);
  //
  // console.log(stopWatch.seconds);
  //
  // document.getElementById(stopWatch.timerId).innerText = stopWatch.seconds;

}

stopWatchAndButtons();
