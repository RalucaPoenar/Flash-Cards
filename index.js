const flashcards = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
        color: "#f44336" // Red
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter",
        color: "#4CAF50" // Green
    },
    {
        question: "What is the chemical symbol for water?",
        answer: "H2O",
        color: "#2196F3" // Blue
    },
    {
        question: "What is the most small country in the world?",
        answer: "Vatican",
        color: "sienna"  //Maro

    },

    {
        question: "What is the highest peak in Romania?",
        answer: "Moldoveanu peak",
        color:"palevioletred" //Pink

    }
];

let currentCard = 0;
let showAnswer = false;

const flashcardElement = document.getElementById('flashcard');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');

function updateCard() {
    const card = flashcards[currentCard];
    flashcardElement.style.backgroundColor = card.color;
    questionElement.innerText = card.question;
    answerElement.innerText = showAnswer ? card.answer : '';
}

function prevCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    showAnswer = false;
    updateCard();
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    showAnswer = false;
    updateCard();
}

function toggleAnswer() {
    showAnswer = !showAnswer;
    updateCard();
}

updateCard();
