

//use this file for any code you want to try out

          //objects
let quizAnswers=[];
let student1={
studentId:101,
quizAnswers:[1,1,2,4]
};
let student2={
  studentId:102,
  quizAnswers:[2,1,2,2]
};
let student3={
  studentId:103,
  quizAnswers:[3,1,3,4]
};
 
quizAnswers.push(student1,student2,student3);
console.log(quizAnswers);
 
function computeStudentScore(student1: number[], quizAnswers: number[]): number {
  let score = 0;
 
  for (let i = 0; i < student1.length; i++) {
    if (student1[i] === quizAnswers[i]) {
      score++;
    }
  }
 
  return score;
}
 
let students1 = [3, 1, 2, 4];
let quizanswers = [3, 1, 2, 4];
 
console.log(computeStudentScore(students1 , quizanswers));





