import { type ListOfQuestions } from "../types";
import { useEffect, useState } from "react";
import { Question } from "./Question";

const questionsList: ListOfQuestions = [
  {
    id: 1,
    text: "¿Cuál es la capital de Francia?",
    answerOptions: ["No", "París", "Nel", "Nanai"],
    correctAnswer: "París",
    completed: false,
  },
  {
    id: 2,
    text: "¿Cuál es el río más largo del mundo?",
    answerOptions: ["No", "Nilo", "Nel", "Nanai"],
    correctAnswer: "Nilo",
    completed: false,
  },
];

interface Props {
  onTestFinished: (data: number) => void;
}

export const Test: React.FC<Props> = ({ onTestFinished }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState<number>(0);

  function handleTestFinished() {
    console.log('test finished')
    onTestFinished(correctAnswerCounter)
  }

  return (
    <ul className="test-list rounded-xl shadow-lg p-2">
      {correctAnswerCounter}
      <Question
        id={questionsList[currentQuestion].id}
        text={questionsList[currentQuestion].text}
        answerOptions={questionsList[currentQuestion].answerOptions}
        correctAnswer={questionsList[currentQuestion].correctAnswer}
        completed={questionsList[currentQuestion].completed}
        increaseScore={() => setCorrectAnswerCounter(correctAnswerCounter + 1)}
        numberOfQuestions={questionsList.length}
        currentQuestion={currentQuestion}
        onChangeQuestion={() => {
          if (currentQuestion + 1 == questionsList.length) {
            handleTestFinished()
          }

          if (currentQuestion + 1 != questionsList.length) {
            setCurrentQuestion(currentQuestion + 1)
          }
        }
        }
      />
    </ul>
  );
};

// funcion para seleccionar las preguntas
// variable use state para saber en que pregunta estoy
// funcion en boton para pasar a la siguiente pregunta
// si estoy en la ultima pregunta
// mostrar los aciertos
