import { type ListOfQuestions } from "../types";
import { useEffect, useState } from "react";
import { Question } from "./Question";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLIC_KEY)

interface Props {
  onTestFinished: (data: number) => void;
}

export const Test: React.FC<Props> = ({ onTestFinished }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState<number>(0);
  const [showNextButton, setShowNextButton] = useState<boolean>(false);

  function nextQuestion() {
    if (questions.length != currentQuestion + 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    if (questions.length == currentQuestion + 1) {
      handleTestFinished();
    }
  }
  const [questions, setQuestions] = useState(null)
  
  useEffect(() => {
    getQuestions();
  }, [])
  
  useEffect(() => {
    console.log(questions)
  }, [questions])
  
  async function getQuestions() {
    let { data: questions, error } = await supabase
    .from('questions')
    .select('*')
            
    console.log(questions)
    if(error){
      console.log(error)
    }
    setQuestions(questions)
  }

  function handleTestFinished() {
    console.log("test finished");
    onTestFinished(correctAnswerCounter);
  }

  if(!questions) return null;

  return (
    <ul className="test-list rounded-xl shadow-lg p-2">
      <Question
        id={questions[currentQuestion].id}
        text={questions[currentQuestion].text}
        answerOptions={questions[currentQuestion].answerOptions}
        correctAnswer={questions[currentQuestion].correctAnswer}
        completed={questions[currentQuestion].completed}
        increaseScore={() => setCorrectAnswerCounter(correctAnswerCounter + 1)}
        onShowNextButton={() => setShowNextButton(true)}
        onTimeout={() => setShowNextButton(true)}
      />
      {showNextButton ? (
        <button className="destroy" onClick={() => nextQuestion()}>
          {questions.length == currentQuestion + 1 ? "amonos" : "siguiente"}
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
