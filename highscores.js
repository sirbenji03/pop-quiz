const highScoresList = document.querySelector("#highScoreList")
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML =
highScores.map(score => {
    return`<li class="high-scoress">${score.name} - ${score.score}</li`
}).join("")
