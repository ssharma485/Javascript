'use strict'
const poll = {
    question : 'What is your favorite Language??',
    options: ['0: JS', '1:Python', '2: Java', '3 : c++'],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
     const answer =   Number(prompt(`${this.question} \n ${this.options.join('\n')}\n(Write an option)`)
    );
    console.log(answer);

    //Register answer

    typeof answer ==='number' && answer < this.answers.length && this.answers[answer]++;
    console.log(this.answers);
 }
};
poll.registerNewAnswer();


