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
    answers: {
      a: "Dark Elf",
      b: "High Elf",
      c: "Wood Elf"
    },
    correctAnswer: "c"
  },
  {
    question: "Which character is the title of the final book 'Return of the King' referring to?",
    answers: {
      a: "Celebrimbor",
      b: "Samwise",
      c: "Aragorn"
    },
    correctAnswer: "c"
  },
  {
      question: "What is the name of the main antagonist?",
      answers: {
          a: "Sauron",
          b: "Saruman",
          c: "Salamander"
      }
  }
  ];
  
]