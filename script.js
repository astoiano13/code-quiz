const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
      question: "What is the name of Frodo and Bilbo's tall, grey wizard companion?",
      answers: {
        a: "Dumbledore",
        b: "Gandalf",
        c: "Paul Newman"
      },
      correctAnswer: "b"
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

  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');