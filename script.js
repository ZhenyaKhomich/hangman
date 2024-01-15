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
        question: "Yellow fruit that grows in Africa?",
        answer:"banana"
    },
    {
        question: "A two-wheeler with pedals?",
        answer:"bicycle"
    }
];

let currentAnswer;
let rightLetters;
let startScore;
const maxScore = 6;
const gameResultWin = document.querySelector(".win");
const gameResultLost = document.querySelector(".lost");
const gameEnd = (isWin) => {
    setTimeout(() => {
        if (isWin) {
            gameResultWin.classList.add("open");
            gameResultWin.querySelector("b").innerHTML = `${currentAnswer}`;
            document.querySelector(".keybord").classList.add("dis");
        }  gameResultLost.classList.add("open");
        document.querySelector(".keybord").classList.add("dis");
        gameResultLost.querySelector("b").innerHTML = `${currentAnswer}`;
    }, 200);
}

const keybordBlock = document.querySelector(".keybord");
const personParts = document.querySelector(".main__left-partman");
const wordNone = document.querySelector(".word__none-letters");
const scoreNum = document.querySelector(".score-num");
const letterClick = (button, letterClicked) => {
    if(currentAnswer.includes(letterClicked)) {
        [...currentAnswer].forEach((letter, index) => {
            if(letter === letterClicked) {
                rightLetters.push(letter);
                wordNone.querySelectorAll("li")[index].innerText = letter;
                wordNone.querySelectorAll("li")[index].classList.add("word__none-letter");
            }
        });
    } else {
        startScore++;
        personParts.querySelectorAll("div")[startScore-1].classList.add("yes");
    }
    
    button.disabled = true;
    scoreNum.innerText = `${startScore} / ${maxScore}`;

    if(startScore === maxScore) return gameEnd(false);
    if(rightLetters.length === currentAnswer.length) return gameEnd(true);
}

for(let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keybordBlock.appendChild(button);
    button.addEventListener("click", el => letterClick(el.target, String.fromCharCode(i)));
}

const playAgain = () => {
    rightLetters = [];
    startScore = 0;
    scoreNum.innerText = `${startScore} / ${maxScore}`;
    document.querySelector(".win").classList.remove("open");
    gameResultLost.classList.remove("open");
    keybordBlock.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordNone.innerHTML = currentAnswer.split("").map(() => `<li class="letter"></li>`).join("");

    personParts.querySelectorAll("div")[0].classList.remove("yes");
    personParts.querySelectorAll("div")[1].classList.remove("yes");
    personParts.querySelectorAll("div")[2].classList.remove("yes");
    personParts.querySelectorAll("div")[3].classList.remove("yes");
    personParts.querySelectorAll("div")[4].classList.remove("yes");
    personParts.querySelectorAll("div")[5].classList.remove("yes");

    document.querySelector(".keybord").classList.remove("dis");
}

const addRandonQuestion = () => {
    const {answer, question} = listQuestions[Math.floor(Math.random() * listQuestions.length)];
    currentAnswer = answer;
    console.log(answer);
    document.querySelector(".question__text").innerText = question;
    playAgain ();
    
}

const buttonPlayAgainLost = document.querySelector(".lost .play-again");
const buttonPlayAgainWin = document.querySelector(".win .play-again");

addRandonQuestion();

buttonPlayAgainLost.addEventListener("click", addRandonQuestion);
buttonPlayAgainWin.addEventListener("click", addRandonQuestion);

