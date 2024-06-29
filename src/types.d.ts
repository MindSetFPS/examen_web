export interface Questions {
  id: string;
  question: string;
  answer: string;
  completed: boolean;
  options: string[];
}
export type ListOfQuestions = Questions[];
