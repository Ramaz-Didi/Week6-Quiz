startQuiz = document.querySelector("#start");
timerEl = document.querySelector(".timer");
startScreenText =document.querySelector("#start-screen");
multichoice = document.querySelector("#multipleChoice");
buttonChoice = document.querySelector(".choices");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#questions");


let quizQuestions = [{question: "Which function need to be called to stop continues calling The setInterval() Function?", answer:["setInterval()","clearInterval()","matchMedia()","focus()"], correctAnswer:2},
{question: "Inside which HTML element do we put the JavaScript?", answer:["<script>","<scripting>","<javascript>","<js>"], correctAnswer:3},
{question: "Where is the correct place to insert a JavaScript?", answer:["The <body> section","The <footer> section","The <head> section","Both <body> and the <head> sections are used",], correctAnswer:3}
];


var secondsLeft = 5;
var correctAnswerNumber = -1;
function startTime(){
var timerInterval = setInterval(function () {
        
        if(secondsLeft*1 === 0) {
            // Stops execution of action at set interval
            timerEl.textContent = "Time is up";
            clearInterval(timerInterval);
            // Calls function to create and append image
         } else {
            timerEl.textContent = "Time "+secondsLeft;
         }
         secondsLeft--;
}, 1000);
}
function sendMessage() {
  timeEl.textContent = " ";
  alert("time is ended");
}


startQuiz.addEventListener("click", function (event) {
    if (event.target.matches("button")) 
    {
        // startTime();
        
        startScreenText.setAttribute("class","hide"); 
        
        for (var i = 0; i < quizQuestions.length; i++) 
        { getQuestions(i)

        }    
        
    }
})

function getQuestions(questionIndex)
{
        
        var questionAll = quizQuestions[questionIndex];
        var answerAll = questionAll.answer;
        var correctAnswerNumber = questionAll.correctAnswer;
        var questionTitleText = questionAll.question;
        console.log("correct answer"+correctAnswerNumber);
        questionChoices.setAttribute("class","start");
        questionTitle.textContent = questionTitleText;
        
        
        //   crete buttons from answers 
        multichoice.innerHTML = "";
        for (var j = 0; j < answerAll.length; j++) 
            {
                // var li = document.createElement("li");
                let button = document.createElement("button");
                button.setAttribute("data-number", j)
                button.textContent = (j+1)+"."+answerAll[j];
                
                multichoice.appendChild(button);  
                
            }
        AnswerTheQuestion(correctAnswerNumber);
            
}

    //Answer the question
function AnswerTheQuestion(correctAnswerNumber) {

    buttonChoice.addEventListener("click", function (event) 
    {   var element = event.target.dataset.number;
        console.log(element);
        if (element === correctAnswerNumber)
        {
        console.log("ANSWER IS CORRECT");
                
            
        }
        
    })
}
    