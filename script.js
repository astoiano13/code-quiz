var startBtn = document.getElementById("start")
var firstAnswer = document.getElementById("firstAnswer")
var secondAnswer = document.getElementById("secondAnswer")
var thirdAnswer = document.getElementById("thirdAnswer")
var question = []
var timeEl = document.getElementById("time")
var startScreen = document.getElementById(".start-screen")
var quiz = document.getElementById(".quiz")


var questionArray = [
  {
    question: "What is the name of Frodo and Bilbo's tall, grey wizard companion?",
    answer: "Gandalf",
    answerList:["Dumbledore", "Gandalf", "Paul Newman"],
    correctAnswer: 1
  },

  {
    question: "The expert archer, Legolas, is of what breed of Elves?",
    answer: "Wood Elf",
    answerList: ["Dark Elf", "High Elf", "Wood Elf"],
    correctAnswer: 2
  },
  {
    question: "Which character is the title of the final book 'Return of the King' referring to?",
    answer: "Aragorn",
    answerList: ["Celebrimbor", "Samwise", "Aragorn"],
    correctAnswer: 2
  },
  {
      question: "What is the name of the main antagonist?",
      answer: "Sauron",
      answers: ["Sauron", "Saruman", "Salamander"]
  }
  ];

  startBtn.addEventListener("click", setTime)

  function setTime() {
    if (event.target.matches("button")) {
      startScreen.setAttribute("style", "display: none !important")
      quiz.setAttribute("style", "display block !important")
    }

   var timeLeft = 75
   var timeInt = setInterval(function(){
     timeEl.textContent = "Time: " + timeLeft
     timeLeft--;

     if (timeLeft === 0) {
       timeEl.textContent = "";
       clearInterval(timeInt);
     }
   }, 1000); 
  }
