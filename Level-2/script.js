let quizData = [];
let currentScore = 0;

function showSection(id) {
    document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function addQuestionField() {
    const container = document.getElementById('questions-container');
    const div = document.createElement('div');
    div.className = 'q-input-group';
    div.innerHTML = `
        <hr style="margin:15px 0; opacity:0.2">
        <input type="text" placeholder="Enter Question" class="q-text">
        <input type="text" placeholder="Option 1" class="opt">
        <input type="text" placeholder="Option 2" class="opt">
        <input type="text" placeholder="Correct Answer" class="ans">
    `;
    container.appendChild(div);
}

function saveQuiz() {
    const qElements = document.querySelectorAll('.q-input-group');
    quizData = Array.from(qElements).map(el => ({
        question: el.querySelector('.q-text').value,
        options: [el.querySelectorAll('.opt')[0].value, el.querySelectorAll('.opt')[1].value],
        answer: el.querySelector('.ans').value
    }));

    if(quizData[0].question === "") {
        alert("Please add at least one question!");
        return;
    }
    
    startQuiz();
}

function startQuiz() {
    showSection('play-page');
    loadQuestion(0);
}

function loadQuestion(index) {
    if(index >= quizData.length) {
        showResult();
        return;
    }

    const q = quizData[index];
    document.getElementById('current-q-title').innerText = q.question;
    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if(opt === q.answer) currentScore++;
            loadQuestion(index + 1);
        };
        grid.appendChild(btn);
    });
}

function showResult() {
    showSection('result-page');
    document.getElementById('final-score').innerText = `${currentScore} / ${quizData.length}`;
}