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
    question: "Which HTML element defines the document's metadata?",
    a: "<meta>",
    b: "<link>",
    c: "<header>",
    d: "<body>",
    ans: "ans1",
  },

  {
    question: "What is the correct HTML element for inserting a line break?",
    a: "<br>",
    b: "<lb>",
    c: "<hr>",
    d: "<break>",
    ans: "ans1",
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
    question: "What is the correct HTML for creating a hyperlink?",
    a: "<a href='url'>Link</a>",
    b: "<a>Link</a>",
    c: "<link>url</link>",
    d: "<href='url'>Link</href>",
    ans: "ans1",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "class",
    b: "style",
    c: "styles",
    d: "font",
    ans: "ans2",
  },
  {
    question: "Which HTML element is used to specify a header for a document?",
    a: "<head>",
    b: "<header>",
    c: "<h1>",
    d: "<top>",
    ans: "ans2",
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
    a: "src",
    b: "alt",
    c: "title",
    d: "href",
    ans: "ans2",
  },
  {
    question: "How can you make a numbered list in HTML?",
    a: "<ul>",
    b: "<list>",
    c: "<ol>",
    d: "<li>",
    ans: "ans3",
  },
  {
    question: "Which attribute is used in HTML to open a link in a new tab or window?",
    a: "target='_self'",
    b: "target='_new'",
    c: "target='_blank'",
    d: "href='_blank'",
    ans: "ans3",
  },
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
    score +=5
    // console.log(score)
  }
  QuizIndex++
  deselection()

  if (QuizIndex < quizData.length) {
    loadQuiz()
  }
  else {
    question.innerHTML = `Your score is  ${score} / 50`;
    document.querySelector('ul').style.display = 'none';
    submitBtn.innerHTML = 'Play Again'
    submitBtn.addEventListener('click', ()=>{
      location.reload()
    })
  }
})
