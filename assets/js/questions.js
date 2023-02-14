var startQuizBtn = document.querySelector("#startBtn");
timerEl = document.querySelector(".timer");
startScreenText =document.querySelector("#start-screen");
var buttonChoice = document.querySelector(".choices");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#questions");
var resultsTitle = document.querySelector("#results");

let quizQuestions = [{question: "1.Which function need to be called to stop continues calling The setInterval() Function?", answer:["setInterval()","clearInterval()","matchMedia()","focus()"], correctAnswer:1},
{question: "2.Inside which HTML element do we put the JavaScript?", answer:["<script>","<scripting>","<javascript>","<js>"], correctAnswer:1},
{question: "3.Where is the correct place to insert a JavaScript?", answer:["The <body> section","The <footer> section","The <head> section","Both <body> and the <head> sections are used",], correctAnswer:4},
{question: "4.Inside which HTML element do we put the JavaScript?", answer:["<js>>","<scripting>","<javascript>","<script>",], correctAnswer:4},
{question: "5.How to write an IF statement in JavaScript?", answer:["if i=10 than","if (i == 9)","if i=3 than",], correctAnswer:2},
{question: "6.How to write an for statement in JavaScript?", answer:["for i=7 than","for until i == 9","for (i = 0; i < 5; i++) {}","i>0 than i++",], correctAnswer:3},
{question: "7.How to console log 'Hello Word'in JavaScript?", answer:["'Hello Word'","console.log('Hello Word')","log('Hello Word')",], correctAnswer:2},
];


var secondsLeft = 60;//Quiz Time
var correctAnswerNumber = 0;
var testResults =0;
var resultsTitleText="";
var points =0;


//=============== start of the program
startQuizBtn.addEventListener("click", function (event) {
    // Preventing the submit button from trying to submit the form
    event.preventDefault();
    if (event.target.matches("button"))
        {
            startQuiz ()  
        } 
    i=0;
    // correctAnswerNumber=quizQuestions[i].correctAnswer;
    // console.log(correctAnswerNumber);
    questionTurns(quizQuestions[i]);
    document.querySelector(".question").addEventListener("click", function (event)
         {
            event.preventDefault();
            var butNumber = 1+parseInt(event.target.dataset.number);
            console.log("button number", butNumber,"correct answer", quizQuestions[i].correctAnswer);
            if(butNumber == quizQuestions[i].correctAnswer)
        {
            resultsTitleText= "You got correct answer";
            points++;
            // return (AnswerNumber,outcomeText,0);
            console.log("points",points);
            window.onload=function(){
                document.getElementById("correctAudio").play();
              }
        } else 
        {
            resultsTitleText= "You answer is wrong";
            secondsLeft = secondsLeft -10;
            console.log("time left ",secondsLeft);
        }

        
        setTimeout(function(){ resultsTitle.setAttribute("class","start");
        resultsTitle.textContent = resultsTitleText; }, 100)


         if (event.target.matches("button"))
         {
             if (i<quizQuestions.length-1) {i++;
             questionTurns(quizQuestions[i]);
             }
             else {
                 endTest()  
             }
          } 
        })
    
});



 //=============== End of the program

function testTime(){
    var timerInterval = setInterval(function () {
        
        if(secondsLeft*1 <= 1) {
            // Stops execution of action at set interval
            timerEl.textContent = "Time is up";
            clearInterval(timerInterval);
            endTest()
            // Calls function to create and append image
        } else {
            timerEl.textContent = "Time "+secondsLeft;
        }
        secondsLeft--;
    }, 1000);
    
    
    
} //=============== End of testTime program

function endTest() {
    questionChoices.setAttribute("class","hide");
    resultsTitle.setAttribute("class","hide");
    var endScreen=document.getElementById("end-screen");
    endScreen.setAttribute("class","start");
    document.getElementById("final-score").textContent = " "+points;
    // alert("time is ended");
}

function startQuiz () {
    startScreenText.setAttribute("class","hide");
    startScreenText.style.display = "none";
    testTime()
}

// questionTurns(i,quizQuestions[i],correctAnswerNumber);

function questionTurns(questionAll) {
    
    startScreenText.setAttribute("class","hide"); 
    resultsTitle.setAttribute("class","hide");
    // var questionAll = quizQuestions[turn];
    var answerAll = questionAll.answer;
    // var correctAnswerNumber = questionAll.correctAnswer;
    var questionTitleText = questionAll.question;
    // console.log("correct answer"+correctAnswerNumber);
    questionChoices.setAttribute("class","question");
    questionTitle.textContent = questionTitleText;
    //   crete buttons from answers 
    buttonChoice.innerHTML = "";
    for (var j = 0; j < answerAll.length; j++) 
        {
        let btnChoice = document.createElement("button");
            btnChoice.setAttribute("data-number", j)
            btnChoice.textContent = (j+1)+"."+answerAll[j];
            btnChoice.setAttribute("class","question");
            btnChoice.setAttribute("id","button"+j);
            buttonChoice.appendChild(btnChoice);  
        }
    } //==================end of the question turn
    