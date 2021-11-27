const questions = document.querySelector('#question')
const choices = Array.from(document.querySelector('#choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')


let currentQuestion = {};
let acceptingAnswers = true
let score = 0
let squestionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Commonly used data type Do Not Include ?',
        choice1: "string",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3,
    },
    {
        question: 'Arrays in Javascript can be used to store ?',
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "boolens",
        choice4: "all of the above",
        answer: 4,
    },
    {
        question: 'String values must be enclosed within_____when being assigned to variables ?',
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parenthesis",
        answer: 3,
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the deugger is?',
        choice1: "javascipt",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 1,
    }
]

const SCORE_POINTS =100
const MAX_QUESTIONS = 4


startGame = () => {
    questionCounter =0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
} 

getNewQuestions = () => {
    if(availableQuestions.length === 0 || )
}
