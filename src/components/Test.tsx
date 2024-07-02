import { type ListOfQuestions } from "../types";
import { useState } from "react";
import { Question } from "./Question";

export const questionsList: ListOfQuestions = [
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
  {
    id: 3,
    text: "¿Cuál es el animal más grande el mundo?",
    answerOptions: ["Jirafa", "Elefante", "Ballena azul", "Hipopotamo"],
    correctAnswer: "Ballena azul",
    completed: false,
  },
];

interface Props {
  onTestFinished: (data: number) => void;
}

export const Test: React.FC<Props> = ({ onTestFinished }) => {
  // const [questions, setQuestions] = useState<ListOfQuestions>(questionsList);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [correctAnswerCounter, setCorrectAnswerCounter] = useState<number>(0);
  const [showNextButton, setShowNextButton] = useState<boolean>(false);

  function nextQuestion() {
    if (questionsList.length != currentQuestion + 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    if (questionsList.length == currentQuestion + 1) {
      handleTestFinished();
    }
  }

  function handleTestFinished() {
    console.log("test finished");
    onTestFinished(correctAnswerCounter);
  }

  return (
    <ul className="test-list rounded-xl shadow-lg p-2">
      <Question
        id={questionsList[currentQuestion].id}
        text={questionsList[currentQuestion].text}
        answerOptions={questionsList[currentQuestion].answerOptions}
        correctAnswer={questionsList[currentQuestion].correctAnswer}
        completed={questionsList[currentQuestion].completed}
        increaseScore={() => setCorrectAnswerCounter(correctAnswerCounter + 1)}
        onShowNextButton={() => setShowNextButton(true)}
        onTimeout={() => setShowNextButton(true)}
      />
      {showNextButton ? (
        <button className="destroy" onClick={() => nextQuestion()}>
          {questionsList.length == currentQuestion + 1 ? "amonos" : "siguiente"}
        </button>
      ) : (
        ""
      )}
    </ul>
  );
};

// funcion para seleccionar las preguntas
// variable use state para saber en que pregunta estoy
// funcion en boton para pasar a la siguiente pregunta
// si estoy en la ultima pregunta
// mostrar los aciertos
