var startButton = document.querySelector("#startButton");
var startScreen = document.querySelector(".startScreen");
var quiz = document.querySelector(".quizScreen");
var questionText = document.querySelector("#questionText");
var container = document.querySelector(".container");
var hpTitle = document.querySelector("#hpTitle");
var buttons = document.querySelector(".buttons");
var timerEl = document.querySelector("#timer");
var message = document.querySelector("#message");
var scoreBoard = document.querySelector("#table");
var completed = document.querySelector(".finish");
var showFinish = document.querySelector("#initFinish");
var submit = document.querySelector("#button-addon1");
var init = document.getElementById("initials");


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


document.getElementById("startButton").onclick = (quiz) => {
  showQuiz();
  downloadTimer();
}

var timeEnd;
var timeLeft = 25;
var time;
function downloadTimer() {
  timerEl.removeAttribute("hidden");
  startScreen.setAttribute("style", "display: none");
  quiz.setAttribute("style", "display: block !important");
  time = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("timer").innerHTML = "Finished";
    } else {
      document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
    }
   timeLeft -= 1;
  }, 1000);
}


var questionIndex = 0;
var lastQuestion = questionArr.length - 1;
function showQuiz(){
  if (questionIndex <= lastQuestion){
    var currentQuestion = questionArr[questionIndex].question;
    questionText.textContent = currentQuestion;

    var choice1 = document.getElementById("btn0");
    var choice2 = document.getElementById("btn1");
    var choice3 = document.getElementById("btn2");

    choice1.textContent = questionArr[questionIndex].answerList[0];
    choice2.textContent = questionArr[questionIndex].answerList[1];
    choice3.textContent = questionArr[questionIndex].answerList[2];
  } else{
    timeEnd = timeLeft;
    clearInterval(time);
    timerEl.textContent = "Time: " + timeEnd;
    results();
  }
}

buttons.addEventListener("click", function (event){
  if (event.target.textContent === questionArr[questionIndex].answer){
    message.setAttribute("style", "color: green; font-size:20px;")
    message.textContent = "Correct!";
  } else{
      timeLeft = timeLeft - 10;
      message.setAttribute("style", "color: red; font-size:20px")
      message.textContent = "Incorrect!";
  }
  questionIndex++;
  showQuiz()
});

function results(){
  clearInterval(time);
  quiz.setAttribute("style", "display: none !important");
  completed.setAttribute("style", "display: block !important");
  showFinish.textContent = "Done!";
}

submit.addEventListener("click", function (event) {
  window.location.href ="./score-page.html";
});