import { type ListOfQuestions } from "../types";
import { Answer } from "./Answers";
import { useState } from "react";
import { Question } from "./Question";

interface Props {
  totest: ListOfQuestions;
  onRemoveAns: (id: string) => void;
}

const questionsList: ListOfQuestions = [
  {
    id: 1,
    text: "¿Cuál es la capital de Francia?",
    answerOptions: ["Madrid", "París", "Roma", "Berlín"],
    correctAnswer: "París",
    completed: false,
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
  
  const [questions, setQuestions] = useState<ListOfQuestions>(questionsList);

  const [currentQuestion, setCurrentQuestion] = useState(0);

/*   const handleRemove = (id: string) => {
    setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
  };

  const handleSelectOption = (id: string, selectedOption: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, selectedOption } : q))
    );
  };
  */ 
  function nextQuestion(){
    
    if(questionsList.length != currentQuestion + 0){
      console.log('jamas van a ser iguales')
      setCurrentQuestion(currentQuestion + 1);
    }

    handleTestFinished()
  }
  
  function handleTestFinished(){
    //
  }

  return (
    <ul className="test-list rounded-xl shadow-lg p-2">

     
        <Question
          id={questionsList[currentQuestion].id}
          text={questionsList[currentQuestion].text}
          answerOptions={questionsList[currentQuestion].answerOptions}
          correctAnswer={questionsList[currentQuestion].correctAnswer}
          completed={questionsList[currentQuestion].completed}
          onChildEvent={() => console.log('ola')}
          // onRemoveAns={handleRemove}
          // onSelectionOption={handleSelectOption}
        />

        <button
          className="destroy"
          onClick={() => nextQuestion() }
        > { questionsList.length == currentQuestion + 1 ? 'amonos': 'siguiente'} </button>


{/*       {totest.map((item) => (
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
