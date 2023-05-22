// Data Of Quiz:

let quizData = [
  {
    question: "HTML stands for?",
    a: "HyperText Markup Language",
    b: "HyperText Mockup Language",
    c: "HyperText Markup Line",
    d: "HigherText Markup Language",
    ans: "ans1",
  },

  {
    question: "CSS stands for?",
    a: "Coding StyleSheet",
    b: "Cascading StyleSheet",
    c: "Both a & b",
    d: "None of above",
    ans: "ans2",
  },

  {
    question: "PHP stands for?",
    a: "Personal Home Page",
    b: "Both a & c",
    c: "HyperText Preprocessor",
    d: "None of above",
    ans: "ans3",
  },

  {
    question: "HTML is an:",
    a: "Programming Language",
    b: "Styling Language",
    c: "All of above",
    d: "Markup Language",
    ans: "ans4",
  },
  {
    question: "JavaScript is an:",
    a: "Markup Language",
    b: "Styling Language",
    c: "All of above",
    d: "Programming Language",
    ans: "ans4",
  }
]

// Initializing the variables:
const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let score = 0;
let QuizIndex = 0;

const loadQuiz = () => {

  let questionList = quizData[QuizIndex]
  question.innerText = questionList.question
  a_text.innerText = questionList.a
  b_text.innerText = questionList.b
  c_text.innerText = questionList.c
  d_text.innerText = questionList.d
}

loadQuiz();

const checkAnswers = () => {
  let answer;
  answers.forEach((currentAns) => {
    if (currentAns.checked) {
      answer = currentAns.id;
    }
  })
  return answer
};

const deselection = () => {
  answers.forEach((currentAns) => {
    currentAns.checked = false;
  })
}

submitBtn.addEventListener('click', () => {
  const checkingAnswers = checkAnswers()
  console.log(checkingAnswers)
  if (checkingAnswers === quizData[QuizIndex].ans) {
    score +=1
    // console.log(score)
  }
  QuizIndex++
  deselection()

  if (QuizIndex < quizData.length) {
    loadQuiz()
  }
  else {
    question.innerHTML = `Your score is  ${score} / ${quizData.length}`;
    document.querySelector('ul').style.display = 'none';
    submitBtn.innerHTML = 'Play Again'
    submitBtn.addEventListener('click', ()=>{
      location.reload()
    })
  }
})
