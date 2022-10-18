var questionNumber = 0;
var score = 0;
var selectedChoices = ['', '', '', '', '', '', '', '', '', '']

var questions = [
{
'question': 'What is JavaScript?',
'choiceA': 'A dynamic programming language.',
'choiceB': 'Its used to create and control dynamic website content.',
'choiceC': 'Program that allows you to make web pages interactive.',
'choiceD': 'All of these',
'correct': 'choiceD'
},
{
'question': 'Inside which HTML element do we put the JavaScript?',
'choiceA': '<js>',
'choiceB': '<javascript>',
'choiceC': '<script>',
'choiceD': 'None of these',
'correct': 'choiceC'
},
{
'question': 'JavaScript is a ___ -side programming language.',
'choiceA': 'client',
'choiceB': 'server',
'choiceC': 'both',
'choiceD': 'None of these',
'correct': 'choiceC'
},
{
'question': 'What is the correct JavaScript syntax to print “DataFlair” in the console?',
'choiceA': 'print(“DataFlair”);',
'choiceB': 'console.print(“DataFlair”);',
'choiceC': 'log.console(“DataFlair”);',
'choiceD': 'console.log(“DataFlair”);',
'correct': 'choiceD'
},
{
'question': 'What is the full form of HTML ?',
'choiceA': 'Hyper text markup language',
'choiceB': 'Hyper transform mark linguist',
'choiceC': 'Homo text mark language',
'choiceD': 'All of these',
'correct': 'choiceA'
},
{
'question': 'Which of the given options is an incorrect variable name?',
'choiceA': 'javascript',
'choiceB': '-javascript',
'choiceC': '$javascript',
'choiceD': '_javascript',
'correct': 'choiceB'
},
{
'question': 'Which of the following methods is used to access HTML elements using Javascript?',
'choiceA': 'getElementbyId()',
'choiceB': 'getElementbyClassName()',
'choiceC': 'Both A and B',
'choiceD': 'None of these',
'correct': 'choiceC'
},
{
'question': 'Choose the correct HTML element for the largest heading:?',
'choiceA': '<h3>',
'choiceB': '<h1>',
'choiceC': '<heading>',
'choiceD': '<head>',
'correct': 'choiceD'
},
{
'question': 'What does CSS stand for??',
'choiceA': 'Cascading Style Sheets',
'choiceB': 'Creative Style Sheets',
'choiceC': 'Computer Style Sheets',
'choiceD': 'Colorful Style Sheets',
'correct': 'choiceA'
},
{
'question': '< body > Is this an opening tag or a closing tag?',
'choiceA': 'Opening',
'choiceB': 'Closing',
'choiceC': 'Both',
'choiceD': 'None of these',
'correct': 'choiceC'
}
]

function next(event) {
event.preventDefault();
questionNumber++;
clearChoices();
getQuestion();
}
function init() {
getQuestion();
document.getElementById('choices').addEventListener('click', function (event) {
const radioButtons = document.querySelectorAll('input[name="choices"]');
let selectedValue;
for (const radioButton of radioButtons) {
if (radioButton.checked) {
selectedValue = radioButton.value;
break;
}
}
selectedChoices[questionNumber] = selectedValue;
calculateScore();
});

}

init();

function getQuestion() { //Function to recieve question words and choices words
if (questionNumber >= questions.length) {
const btn = document.getElementsByClassName('btn')[0];
btn.style.display = "none";
return;
}

const qNumber = document.getElementById('qNumber');
qNumber.innerText = "Question: " + (questionNumber + 1); //Sums +1 after every question 

document.getElementById("question").innerText = questions[questionNumber]["question"];
document.getElementById("choice-A").innerText = questions[questionNumber]["choiceA"];
document.getElementById("choice-B").innerText = questions[questionNumber]["choiceB"];
document.getElementById("choice-C").innerText = questions[questionNumber]["choiceC"];
document.getElementById("choice-D").innerText = questions[questionNumber]["choiceD"];
}

function clearChoices() { 
const radioButtons = document.querySelectorAll('input[name="choices"]');
for (const radioButton of radioButtons) {
radioButton.checked = false;
}
}

function calculateScore() { //Function that saves an array that adds every correct answer
score = 0;
for (var i = 0; i < questions.length; i++) {
if (questions[i].correct === selectedChoices[i])
score++;
}
const scoreDisplay = document.querySelector('#results > p');
scoreDisplay.innerText = 'Total Correct Answers: ' + score;
}