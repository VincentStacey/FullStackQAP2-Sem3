const session = require('express-session')
const express = require('express');
const app = express();
const port = 3000;
const { getQuestion, isCorrectAnswer } = require('./utils/mathUtilities');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static('public')); // To serve static files (e.g., CSS)
app.use(session({
  secret: 'QAP2', 
  resave: false,
  saveUninitialized: true,  
}));

//Some routes required for full functionality are missing here. Only get routes should be required
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/quiz', (req, res) => {
  const question = getQuestion();  
  req.session.question = question; 
  res.render('quiz', { question });
});

app.get("/leaderboards", (req, res) => {
    res.render("leaderboards"); 
  });

  app.get("/quizcompletion", (req, res) => {
    res.render("quizcompletion"); 
  });


//Handles quiz submissions.
let currStreak = 0;

app.post('/quiz', (req, res) => {
  const { answer } = req.body;
  const question = req.session.question;  

  if (!question) {
      return res.redirect('/quiz');  
  }

  const isCorrect = isCorrectAnswer(question, Number(answer));  

  if (isCorrect) {
      currStreak++;
  } else {
      currStreak = 0;
  }

  res.render('quizCompletion', { streak: currStreak, isCorrect });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});