const questions = [
  {
    question: "Which is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Venus", "Mars", "Jupiter"],
    correct: 2
  },
  {
    question: "What is the largest mammal?",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correct: 1
  }
];

let currentIndex = 0;
let score = 0;
let answeredQuestions = new Array(questions.length).fill(false);

const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers-list");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");

function renderQuestion(index) {
  const currentQ = questions[index];
  questionText.textContent = currentQ.question;

 
  answersList.innerHTML = "";

  currentQ.answers.forEach((answer, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-option");
    btn.onclick = () => handleAnswer(i, btn);
    li.appendChild(btn);
    answersList.appendChild(li);
  });

  backBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.textContent = index === questions.length - 1 ? "Finish" : "Next";

  updateScore();
}

function handleAnswer(selectedIndex, clickedBtn) {
  const correctIndex = questions[currentIndex].correct;
  const buttons = document.querySelectorAll(".answer-option");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) {
      btn.style.backgroundColor = "#28a745"; 
    } else if (i === selectedIndex) {
      btn.style.backgroundColor = "#dc3545"; 
    }
  });

  if (!answeredQuestions[currentIndex] && selectedIndex === correctIndex) {
    score++;
    answeredQuestions[currentIndex] = true;
  }

  updateScore();
}

function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

function goNext() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
  } else {
    showFinalScore();
  }
}

function goBack() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion(currentIndex);
  }
}

function showFinalScore() {
  questionText.textContent = `You completed the quiz! Your score is ${score}/${questions.length}`;
  answersList.innerHTML = "";
  backBtn.style.display = "none";
  nextBtn.textContent = "Restart";
  nextBtn.onclick = () => location.reload();
}


renderQuestion(currentIndex);
