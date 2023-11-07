
// export interface StudentQuiz {
//     studentId: number,
//     quizAnswers: number[]
// }

// export function gradeStudent(studentAnswers: number[], correct: number[]): number {
// let score: number = 0;
// for (let i = 0; i < studentAnswers.length; i++) {
//     if (studentAnswers[i] === correct[i]) {
//       score++;
//     }
//   }
//   return score;
// }


// // export function gradeQuiz(){}
// // //IMPLEMENT THIS
// export function gradeQuiz(quizAnswers: Student[], correct: number[]): number[] {
//     const scores: number[] = [];
  
//     for (const student of quizAnswers) {
//       const score = quizAnswers(student.quizAnswers, correct);
//       scores.push(score);
//     }
  
//     return scores;
//   }


// export function gradeQuizLabeled(studentQuizzes: Student[], correctAnswers: number[]): Array<{ id: number, score: number }> {
//     const labeledScores: Array<{ id: number, score: number }> = [];
  
//     for (const student of studentQuizzes) {
//       const score = quizAnswers(student.quizAnswers, correctAnswers);
//       labeledScores.push({ id: student.studentId, score });
//     }
  
//     return labeledScores;
//   }
  

//   const studentQuizzes: Student[] = [student1, student2, student3];
//   const correctAnswers: number[] = [3, 1, 2, 4];
  
//   const individualScores: number[] = studentQuizzes.map((student) =>
//     quizAnswers(student.quizAnswers, correctAnswers)
//   );
  
//   const labeledScores: Array<{ id: number, score: number }> = studentQuizzes.map((student) => ({
//     id: student.studentId,
//     score: quizAnswers(student.quizAnswers, correctAnswers),
//   }));
  
//   console.log(individualScores); // [3, 2, 3]
//   console.log(labeledScores); // [{ id: 101, score: 3 }, { id: 102, score: 2 },{ id: 103, score: 3 }]

export interface StudentQuiz {
    studentId: number;
    quizAnswers: number[];
  }
  
  export function gradeStudent(studentAnswers: number[], correct: number[]): number {
    let score: number = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
      if (studentAnswers[i] === correct[i]) {
        score++;
      }
    }
    return score;
  }
  
  export function gradeQuiz(quizAnswers: StudentQuiz[], correct: number[]): number[] {
    const scores: number[] = [];
  
    for (const student of quizAnswers) {
      const score = gradeStudent(student.quizAnswers, correct);
      scores.push(score);
    }
  
    return scores;
  }
  
  export function gradeQuizLabeled(studentQuizzes: StudentQuiz[], correctAnswers: number[]): Array<{ id: number, score: number }> {
    const labeledScores: Array<{ id: number, score: number }> = [];
  
    for (const student of studentQuizzes) {
      const score = gradeStudent(student.quizAnswers, correctAnswers);
      labeledScores.push({ id: student.studentId, score });
    }
  
    return labeledScores;
  }
  