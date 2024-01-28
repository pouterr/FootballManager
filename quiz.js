document.getElementById('footballQuiz').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    let correctAnswers = 0;
    
    const answers = {
        question1: 'France',
        question2: 'Diego Maradona',
        question3: 'Real Madrid',
        question4: '11',
        question5: 'Lionel Messi'
    };
    
    Object.keys(answers).forEach((question, index) => {
        const userAnswer = form[question].value;
        const questionElement = document.createElement('div');
        if (userAnswer === answers[question]) {
            correctAnswers++;
            questionElement.innerHTML = `${index + 1}. Correct!`;
        } else {
            questionElement.innerHTML = `${index + 1}. Incorrect, the correct answer is ${answers[question]}.`;
        }
        resultsDiv.appendChild(questionElement);
    });

    const scoreElement = document.createElement('div');
    scoreElement.innerHTML = `<strong>Your score: ${correctAnswers} out of 5</strong>`;
    resultsDiv.appendChild(scoreElement);
});
    