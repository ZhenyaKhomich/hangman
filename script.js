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

const page = document.createElement("div");
page.className = "page";
document.body.prepend(page);

const header = document.createElement("header");
header.className = "header";
page.append(header); 

const h1 = document.createElement("h1");
h1.className = "header__text";
header.append(h1);
h1.innerHTML = ("- HANGMAN GAME -");

const main = document.createElement("div");
main.className = "main";
page.append(main);

const main__left = document.createElement("div");
main__left.className = "main__left";
main.append(main__left);

const main__leftGallows = document.createElement("div");
main__leftGallows .className = "main__left-gallows";
main__left.append(main__leftGallows);

const img__gallows = document.createElement("img");
img__gallows.className = "img-gallows";
img__gallows.src="./assets/gallows.png";
main__leftGallows.append(img__gallows);

const main__leftPartMan = document.createElement("div");
main__leftPartMan.className = "main__left-partman";
main__left.append(main__leftPartMan);

const img1 = document.createElement("div");
img1.className = "img1 no";
main__leftPartMan.append(img1);

const part1 = document.createElement("img");
part1.className = "part1";
part1.src = "./assets/part-1.png";
img1.append(part1);

const img2 = document.createElement("div");
img2.className = "img2 no";
main__leftPartMan.append(img2);

const part2 = document.createElement("img");
part2.className = "part2";
part2.src = "./assets/part-2.png";
img2.append(part2);

const img3 = document.createElement("div");
img3.className = "img3 no";
main__leftPartMan.append(img3);

const part3 = document.createElement("img");
part3.className = "part3";
part3.src = "./assets/part-3.png";
img3.append(part3);

const img4 = document.createElement("div");
img4.className = "img4 no";
main__leftPartMan.append(img4);

const part4 = document.createElement("img");
part4.className = "part4";
part4.src = "./assets/part-4.png";
img4.append(part4);

const img5 = document.createElement("div");
img5.className = "img5 no";
main__leftPartMan.append(img5);

const part5 = document.createElement("img");
part5.className = "part5";
part5.src = "./assets/part-5.png"
img5.append(part5);

const img6 = document.createElement("div");
img6.className = "img6 no";
main__leftPartMan.append(img6);

const part6 = document.createElement("img");
part6.className = "part6";
part6.src = "./assets/part-6.png";
img6.append(part6);

const result = document.createElement("div");
result.className = "result";
main.append(result);

const lost = document.createElement("div");
lost.className = "lost";
result.append(lost);

const lostImg = document.createElement("img");
lostImg.className = "lostImg";
lostImg.src ="./assets/lose-img.png";
lost.append(lostImg);

const lost__text = document.createElement("p");
lost__text.className = "lost-text";
lost.append(lost__text);
lost__text.innerHTML = ('GAME OVER');

const word = document.createElement("p");
word.className = "word";
lost.append(word);

const wordBLost = document.createElement("b");
wordBLost.className = "wordBLost";
word.append(wordBLost);

const playAgLost = document.createElement("button");
playAgLost.className = "play-again";
playAgLost.innerHTML = ("PLAY AGAIN");
lost.append(playAgLost);

const win = document.createElement("div");
win.className = "win";
result.append(win);

const winImg = document.createElement("img");
winImg.className = "winImg";
winImg.src ="./assets/win-img.png";
win.append(winImg);

const win__text = document.createElement("p");
win__text.className = "win-text";
win__text.innerHTML = ("YOU WIN");
win.append(win__text);

const wordWin = document.createElement("b");
wordWin.className = "word";
win.append(wordWin);

const wordBWin = document.createElement("b");
wordBWin.className = "wordBWin";
word.append(wordBWin);

const playAgWin = document.createElement("button");
playAgWin.className = "play-again";
playAgWin.innerHTML = ("PLAY AGAIN");
win.append(playAgWin);

const main__right = document.createElement("div");
main__right.className = "main__right";
main.append(main__right);

const word__none = document.createElement("div");
word__none.className = "word__none";
main__right.append(word__none);

const word__none__letters = document.createElement("ul");
word__none__letters.className = "word__none-letters";
word__none.append(word__none__letters);

const question = document.createElement("div");
question.className = "question";
main__right.append(question);

const question__text = document.createElement("p");
question__text.className = "question__text";
question.append(question__text);

const score__block = document.createElement("div");
score__block.className = "score__block";
main__right.append(score__block);

const score__text = document.createElement("p");
score__text.className = "score__text";
score__block.append(score__text);

const score__num = document.createElement("span");
score__num.className = "score-num";
score__text.append(score__num);

const elB = document.createElement("b");
elB.className = "elB";
score__num.append(elB);

const keybord = document.createElement("div");
keybord.className = "keybord";
main__right.append(keybord);

const footer = document.createElement("div");
footer.className = "footer";
page.append(footer);

const footer__year = document.createElement("div");
footer__year.className = "footer__year";
footer__year.innerHTML = ('@2024');
footer.append(footer__year);

const footer__rs = document.createElement("div");
footer__rs.className = "footer__rs";
footer__rs.innerHTML = ("The Rolling Scopes School");
footer.append(footer__rs);

const footer__github = document.createElement("div");
footer__github.className = "footer__github";
footer.append(footer__github);

const footer__githubA = document.createElement("a");
footer__githubA.className = "footer__githubA";
footer__githubA.href = "https://github.com/ZhenyaKhomich";
footer__github.append(footer__githubA);

const footer__img = document.createElement("img");
footer__img.className = "footer__img";
footer__img.src = "./assets/git.png";
footer__githubA.append(footer__img);

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
const scoreNum = document.querySelector(".score-num b");
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
document.addEventListener('keyup', (e) => {
    letterClick(e.key, e.key);
  });

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

