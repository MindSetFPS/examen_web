export interface Questions {
  id: number;
  text: string;
  correctAnswer: string;
  completed: boolean;
  answerOptions: string[];
}
export type ListOfQuestions = Questions[];
