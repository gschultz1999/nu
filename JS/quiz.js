class Question {
    constructor(text, choices, correctAnswer, difficulty) {
      this.text = text;
      this.choices = choices;
      this.correctAnswer = correctAnswer;
      this.difficulty = difficulty;
    }
  
    isCorrect(choice) {
      return choice === this.correctAnswer;
    }
  }
  
  const questions = [
    new Question("What is 2 + 2?", ["3", "4", "5"], "4", "easy"),
    new Question("What is the capital of France?", ["Paris", "London", "Berlin"], "Paris", "easy"),
    new Question("What is 5 * 6?", ["30", "35", "40"], "30", "medium"),
    new Question("Who wrote '1984'?", ["George Orwell", "Aldous Huxley", "Ray Bradbury"], "George Orwell", "medium"),
    new Question("Solve the integral of x dx", ["x^2/2 + C", "x + C", "x^2 + C"], "x^2/2 + C", "hard"),
    new Question("What is the capital of Mongolia?", ["Ulaanbaatar", "Astana", "Bishkek"], "Ulaanbaatar", "hard"),
    // Add more questions as needed
  ];
  
  let currentDifficulty = "easy";
  let correctAnswers = 0;
  let totalQuestions = 0;
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function getQuestionsByDifficulty(difficulty) {
    return questions.filter(question => question.difficulty === difficulty);
  }
  
  function adjustDifficulty() {
    const accuracy = correctAnswers / totalQuestions;
    if (accuracy > 0.7) {
      currentDifficulty = "hard";
    } else if (accuracy > 0.4) {
      currentDifficulty = "medium";
    } else {
      currentDifficulty = "easy";
    }
  }
  
  function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    correctAnswers = 0;
    totalQuestions = 0;
  
    nextQuestion();
  }
  
  function nextQuestion() {
    adjustDifficulty();
    const questionsByDifficulty = getQuestionsByDifficulty(currentDifficulty);
    const shuffledQuestions = shuffle([...questionsByDifficulty]);
  
    if (shuffledQuestions.length === 0) {
      alert('No questions available for the current difficulty.');
      return;
    }
  
    const currentQuestion = shuffledQuestions[0];
    displayQuestion(currentQuestion);
  }
  
  function displayQuestion(question) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<p>${question.text}</p>`;
  
    question.choices.forEach(choice => {
      const choiceElement = document.createElement('button');
      choiceElement.textContent = choice;
      choiceElement.onclick = () => {
        totalQuestions++;
        if (question.isCorrect(choice)) {
          correctAnswers++;
          alert('Correct!');
        } else {
          alert('Wrong!');
        }
        nextQuestion();
      };
      quizContainer.appendChild(choiceElement);
    });
  }