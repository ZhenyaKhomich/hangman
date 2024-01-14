const listQuestions = [
    {
        question: "What is the first month of summer?",
        answer:"june"
    },
    {
        question: "What language is the question written in?",
        answer:"english"
    },
    {
        question: "How do you say 10 in English?",
        answer:"ten"
    },
    {
        question: "Brand of car with 4 rings?",
        answer:"audi"
    },
    {
        question: "A pet that catches mice?",
        answer:"cat"
    },
    {
        question: "Who is Jerry in the cartoon?",
        answer:"mouse"
    },
    {
        question: "Last name of the lead singer of the group Nirvana?",
        answer:"cobain"
    },
    {
        question: "Version control system?",
        answer:"git"
    },
    {
        question: "File type index?",
        answer:"html"
    },
    {
        question: "Is the img attribute required?",
        answer:"alt"
    },
];

const keybordBlock = document.querySelector(".keybord");
const wordNone = document.querySelector(".word__none-letters");
for(let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keybordBlock.appendChild(button);
}

const addRandonQuestion = () => {
    const {answer, question} = listQuestions[Math.floor(Math.random() * listQuestions.length)];
    console.log(answer);
    document.querySelector(".question__text").innerText = question;
    wordNone.innerHTML = answer.split("").map(() => `<li class="letter"></li>`).join("")
}
addRandonQuestion();




