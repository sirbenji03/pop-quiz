const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true
let score = 0
let questionCounter = 0
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
    getNewQuestion()
} 

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    questions.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click' , e =>{
        if(!acceptingAnswers) return 

        acceptingAnswers = false 
        const selectedChoice = e.target 
        const selectedAnswer = selectedChoice.dataset ['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incoreect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() =>{
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestions()

    }, 1000)
    })

    incrementScore = num => {
        score +=num 
        scoreText.innerText = score
    }

    startGame()
})