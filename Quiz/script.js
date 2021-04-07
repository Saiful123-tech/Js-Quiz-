const quizDB = [
    {
        question: "Q1 What is the full form of HTML?",
        a: "Hello to my Land",
        b: "Hey Text Markup language",
        c: "Hypertext Makup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2 What is the full form of DOM?",
        a: "Document Object Module",
        b: "Data Object Models",
        c: "Document Object  Module",
        d: "Document Object Model",
        ans: "ans4"
    },
    {
        question: "Q3 What is the framework of CSS?",
        a: "Node JS",
        b: "Bootstrap",
        c: "Larawell",
        d: "Django",
        ans: "ans3"
    },
    {
        question: "Q4 Which are the serversides framework?",
        a: "Django",
        b: "Node Js",
        c: "Larawell",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "Q5 How can create single line comment in html?",
        a: "<!-->",
        b: "|",
        c: "/**/",
        d: "#",
        ans: "ans1"
    }
];
const question=document.querySelector('.question');
const option1 =document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 =document.querySelector('#option3');
const option4 =document.querySelector('#option4');
const submit=document.querySelector('#submit');

const showScore = document.querySelector('#showScore');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;
const loadQuestion = () =>{
    const questionList=quizDB[questionCount];
   question.innerText=questionList.question;
   option1.innerText=questionList.a;
   option2.innerText=questionList.b;
   option3.innerText=questionList.c;
   option4.innerText=questionList.d;
};

loadQuestion()
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
        answer = curAnsElem.id;
        }
    });
    return answer;
};
const deselectAll = () =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}
submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    }
    
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">play agin</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});
