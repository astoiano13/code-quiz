var startButton = document.querySelector("#startButton");
var startScreen = document.querySelector(".startScreen");
var quiz = document.querySelector(".quizScreen");
var questionText = document.querySelector("#questionText");
var container = document.querySelector(".container");
var hpTitle = document.querySelector("#hpTitle");
var buttons = document.querySelector(".buttons");
var timerEl = document.querySelector("#count");
var message = document.querySelector("#message");
var scoreBoard = document.querySelector("#table");
var endScreen = document.querySelector(".endScreen");
var submit = document.querySelector("#button-addon1")


var questionArr = [

  {
    question: "What is the name of Frodo and Bilbo's tall, grey wizard companion?",
    answerList: ["Dumbledore", "Gandalf", "Paul Newman"],
    answer: "Gandalf"
  },

  {
    question: "The expert archer, Legolas, is of what breed of Elves?",
    answerList: ["Dark Elf", "High Elf", "Wood Elf"],
    answer: "Wood Elf"
  },

  {
    question: "Which character is the title of the final book 'Return of the King' referring to?",
    answerList: ["Celebrimbor", "Samwise", "Aragorn"],
    answer: "Aragorn"
  },

  {
    question: "What is the name of the main antagonist?",
    answerList: ["Sauron", "Saruman", "Salamander"],
    answer: "Sauron"
  }
]


document.getElementById("startButton").onclick = function (quiz) {
  setCounter();
  renderQuiz();
}



var timeLeft = 0;
var ended = false;
function setCounter(){
  


  timeLeft = (questionArr.length * 8);
  if (event.target.matches("button")) {
    startScreen.setAttribute("style", "display: none !important");
    quiz.setAttribute("style", "display: block !important");
  }
  
  var timeInterval = setInterval(function () {
    timerEl.textContent = "time left: " + timeLeft;
    timeLeft--;
    
    if (ended == true) {
      clearInterval(timeInterval);
    }
    
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "Your time's up!";
      showResults();
    }
    
  }, 1000);
}



var questionCounter = 0;
var lastQuestion = questionArr.length - 1;

function renderQuiz(){
  if (questionCounter <= lastQuestion){

    var currentQuestion = questionArr[questionCounter].question;
    questionText.textContent = currentQuestion;

    var btn1 = document.getElementById("btn0");
    var btn2 = document.getElementById("btn1");
    var btn3 = document.getElementById("btn2");

    btn1.textContent = questionArr[questionCounter].answerList[0];
    btn2.textContent = questionArr[questionCounter].answerList[1];
    btn3.textContent = questionArr[questionCounter].answerList[2];
  }

  else{
    ended = true;
    setTimeout(() => {
      showResults();
    }, 1000);
  }
}

buttons.addEventListener("click", function (event){
  if (event.target.textContent === questionArr[questionCounter].answer){
    message.setAttribute("style", "color: green; font-size:20px;")
    message.textContent = "Correct!";
  } else{
    if (timeLeft > 11) {
      timeLeft = timeLeft - 10;
      message.setAttribute("style", "color: red; font-size:20px")
      message.textContent = "Incorrect!";
    }
  }

  questionCounter++;
  renderQuiz()
})

function showResults(){
  quiz.setAttribute("style", "display: none !important");
  endScreen.setAttribute("style", "display: block !important");
  var viewScore = document.getElementById("viewScore")
  endtitle.textContent = "Finished!";
  viewScore.textContent = "Your final score is: " + timeLeft + ". Enter your initials below!";
}

submit.addEventListener("click", function(event) {
  var initials = document.getElementById("initials");
  var i = initials.value.trim();
  var highScores = JSON.parse(localStorage.getItem("highScores")) || []
  var newScore = {initials: i, score: timeLeft}
  highScores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(highScores))
  window.location.href = "high-scores.hmtl";
})