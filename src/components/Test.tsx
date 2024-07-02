import { type ListOfQuestions } from "../types";
import { Answer } from "./Answers";
<<<<<<< HEAD
import React, { useState } from "react";
import { Question } from "./Question";
import { ResultScreen } from "./ResultScreen";
=======
import { useState } from "react";
import { Question } from "./Question";
>>>>>>> origin/master

interface Props {
  totest: ListOfQuestions;
  onRemoveAns: (id: string) => void;
}

<<<<<<< HEAD
export const questionsList: ListOfQuestions = [
=======
const questionsList: ListOfQuestions = [
>>>>>>> origin/master
  {
    id: 1,
    text: "¿Cuál es la capital de Francia?",
    answerOptions: ["Madrid", "París", "Roma", "Berlín"],
    correctAnswer: "París",
<<<<<<< HEAD
    completed: true,
=======
    completed: false,
>>>>>>> origin/master
  },
  {
    id: 2,
    text: "¿Cuál es el río más largo del mundo?",
    answerOptions: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    correctAnswer: "Nilo",
    completed: false,
  },
];

export const Test: React.FC = () => {
<<<<<<< HEAD
  const [questions, setQuestions] = useState<ListOfQuestions>(questionsList);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    if (questions[currentQuestion].correctAnswer === answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };
  const handleRetry = () => {
    setQuestions(questions);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setShowResults(false);
  };
  if (showResults) {
    return (
      <ResultScreen
        totalCorrect={correctAnswers}
        totalQuestions={questions.length}
        onRetry={handleRetry}
      />
    );
  }
  /*   const handleRemove = (id: string) => {
=======
  
  const [questions, setQuestions] = useState<ListOfQuestions>(questionsList);

  const [currentQuestion, setCurrentQuestion] = useState(0);

/*   const handleRemove = (id: string) => {
>>>>>>> origin/master
    setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
  };

  const handleSelectOption = (id: string, selectedOption: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, selectedOption } : q))
    );
  };
<<<<<<< HEAD
  */
  function nextQuestion() {
    if (questionsList.length != currentQuestion + 0) {
      setCurrentQuestion(currentQuestion + 1);
    }

    handleTestFinished();
  }

  function handleTestFinished() {}

  return (
    <ul className="test-list">
      <Question
        id={questionsList[currentQuestion].id}
        text={questionsList[currentQuestion].text}
        answerOptions={questionsList[currentQuestion].answerOptions}
        correctAnswer={questionsList[currentQuestion].correctAnswer}
        completed={questionsList[currentQuestion].completed}
        // onRemoveAns={handleRemove}
        // onSelectionOption={handleSelectOption}
      />

      {/* {questionsList[currentQuestion].answerOptions} */}

      <button onClick={() => handleAnswer("")}>
        {currentQuestion + 1 === questions.length ? "Terminar" : "Siguiente"}{" "}
        {/* Cambie el boton para que me deje avanzar a los resultados */}
      </button>

      {/*       {totest.map((item) => (
=======
  */ 
  function nextQuestion(){
    
    if(questionsList.length != currentQuestion + 0){
      console.log('jamas van a ser iguales')
      setCurrentQuestion(currentQuestion + 0);
    }

    handleTestFinished()
  }
  
  function handleTestFinished(){
    //
  }

  return (
    <ul className="test-list">

        <Question
          id={questionsList[currentQuestion].id}
          text={questionsList[currentQuestion].text}
          answerOptions={questionsList[currentQuestion].answerOptions}
          correctAnswer={questionsList[currentQuestion].correctAnswer}
          completed={questionsList[currentQuestion].completed}
          // onRemoveAns={handleRemove}
          // onSelectionOption={handleSelectOption}
        />

        <button
          className="destroy"
          onClick={() => nextQuestion() }
        > { questionsList.length == currentQuestion + 1 ? 'amonos': 'siguiente'} </button>


{/*       {totest.map((item) => (
>>>>>>> origin/master
        <li key={item.id} className={`${item.completed ? "completed" : ""}`}>
          <Answer
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            completed={item.completed}
          />
        </li>
      ))} */}
    </ul>
  );
};

// funcion para seleccionar las preguntas

// variable use state para saber en que pregunta estoy

// funcion en boton para pasar a la siguiente pregunta

// si estoy en la ultima pregunta
// mostrar los aciertos
