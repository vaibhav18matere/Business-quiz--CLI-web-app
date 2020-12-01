var readlineSync=require("readline-sync");
var chalk =require('chalk');

var userName=readlineSync.question(chalk.white.bgRed.bold(" what's your name?  "));

var score=0;
var scores = [];

console.log(" heyy " +userName + ", welcome to - Business quiz\n " );

console.log(chalk.white.bgRed.bold(" Quick rules check: "));
console.log(chalk.greenBright("\n Each right answer => +5 points \n "));
console.log(chalk.red(" Each wrong answer => -2 points \n ")); 

console.log(" You should respond in [a/b/c/d] only, ok ? \n \n Let's go !!!");


function quiz (question,options,answer){

  console.log(chalk.yellow("\n" + question));
  console.log(options);

  var userAnswer = readlineSync.question("Your response: ");

  if (userAnswer.toLowerCase()==answer.toLowerCase()){
    console.log(chalk.greenBright("You are right!"));
    score=score+5;
    console.log("your current score is "+ score);
  }
  else {
    console.log(chalk.red("Oops! Wrong Answer"));
    score=score-2;
    console.log(" Now, your current score is "+ score);
  }
}

 let questions = [
  {
    "question": " Que 1. Which company has highest women employee in India ?",
    "options": " a) TCS\n b) Infosys\n c) Reliance \n d) Patanjali \n",
    "answer": "a"
  },
   {
    "question": " Que 2. G.D.P. ranking of India in 2020 is.. ?",
    "options": " a) 3rd\n b) 4th\n c) 5th\n d) 6th\n",
    "answer": "c"
  },
  {
    "question": " Que 3.Who is the richest individual of India?",
    "options": " a) Sri. Ratan Tata\n b) Gautam Adani\n c) Mukesh Ambani\n d) Om Birla \n",
    "answer": "c"
  },
  {
    "question": " Que 4.Which of the following statement is Wrong ? \n", 
    "options": " a) 'Peter-England' is a Indian brand \n b) Bata is Indian brand  \n c) Sudha Murthy- A wife of Narayan murthy was the first employee of Tata group \n d) Reliance is the largest company of India\n",
    "answer": "b"
  },
  {
    "question": " Que 5. Who has received six-sigma award for just 1 mistake \n in every 6 million samples",
    "options": " a) Toyota\n b) Honda\n c) Mumbai Dabewala\n d) Patanjali \n",
    "answer": "c"
  }, 
  ]
function playQuiz() {

  for (var i=0; i<questions.length; i++){

    obj = questions[i];

    quiz(obj.question, obj.options, obj.answer);

    console.log(".........................");
  }

  console.log(" Your final Score is :  ", score);  
  scores.push(score);
  console.log(" Hope you enjoyed it, Thanks for playing, Share your score and feedback please ..! It means a lot for me..! ")
}

playQuiz();

function maxScore(scores) {
var maximum = scores[0];
for (var i = 0; i<scores.length; i++) {

  if(maximum<scores[i]) {
    maximum = scores[i];
  }
}
return maximum;
}
