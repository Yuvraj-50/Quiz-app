const quizdata = [
  {
    question: "what is the most popular programming language ? ",
    a: "java",
    b: "python",
    c: "javascript",
    d: "c++",
    correct: "c",
  },
  {
    question: "Is html a programming language ?",
    a: "Its a mark up language",
    b: "yes",
    c: "no",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "Which of these is a programming language ?",
    a: "javascript",
    b: "html",
    c: "css",
    d: "bootstrap",
    correct: "a",
  },
  {
    question: "css full form ?",
    a: "hypertext markup language",
    b: "casdace styling sheet",
    c: "castle sage saga",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "When javascript was developed ? ",
    a: "1980",
    b: "1990",
    c: "1890",
    d: "2002",
    correct: "b",
  },
];
const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const button = document.getElementById("button");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const container = document.querySelector(".container");

let currentQuestion = 0;
let score = 0;

function init() {
  const displayQuestion = function () {
    unChecked();
    questionEl.textContent = quizdata[currentQuestion].question;
    a_text.textContent = quizdata[currentQuestion].a;
    b_text.textContent = quizdata[currentQuestion].b;
    c_text.textContent = quizdata[currentQuestion].c;
    d_text.textContent = quizdata[currentQuestion].d;
  };

  const getSelected = function () {
    let ans;

    answersEls.forEach((ansEl) => {
      if (ansEl.checked) {
        ans = ansEl.id;
      }
    });

    return ans;
  };
  const unChecked = function () {
    answersEls.forEach((ansEl) => {
      ansEl.checked = false;
    });
  };

  button.addEventListener("click", function () {
    const answer = getSelected();
    // console.log(answer);
    if (answer) {
      if (answer === quizdata[currentQuestion].correct) {
        score++;
        console.log(score);
      }
      currentQuestion++;
      if (currentQuestion < quizdata.length) {
        displayQuestion();
      } else {
        container.innerHTML = ` 
        <h1 class = 'text-align'> You scored ${score} / ${quizdata.length} </h1>
        <button class = 'btn btn-reload'>Reload me</button>`;

        const reloadBtn = document.querySelector(".btn-reload");
        reloadBtn.addEventListener("click", function () {
          document.location.reload();
        });
      }
    }
  });
  displayQuestion();
}
init();
