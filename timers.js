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
  var startingTime = 0
  // var startingTime = boundInitialTime();

  function clickResetBtn(){
    resetBtn.addEventListener('click', function(){
      pauseTimer();
      document.getElementById('timer').innerText = "Stop Watch";
      console.log(startingTime);
      startingTime = 0;
    });
  }

  clickResetBtn();

  function clickStartbtn(){
    startBtn.addEventListener('click', updateTime)
  }

  clickStartbtn();

  function clickPauseBtn(){
    pauseBtn.addEventListener('click', function(){
      pauseTimer()
    });
  }

  clickPauseBtn();

  function updateTime(startingTime) {
    timerResult = setInterval(increaseBySecond,1000);
  }

  function increaseBySecond(){
    document.getElementById('timer').innerText = startingTime ++
  }

  function pauseTimer(){
    clearInterval(timerResult);
  }

}

stopWatchAndButtons();
