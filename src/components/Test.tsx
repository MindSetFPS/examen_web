import { type ListOfQuestions } from "../types";
import { useEffect, useState } from "react";
import { Question } from "./Question";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLIC_KEY)

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
    console.log('test finished')
    onTestFinished(correctAnswerCounter)
  }

  if(!questions) return null;

  return (
    <ul className="test-list rounded-xl shadow-lg p-2">
      {currentQuestion}
      <Question
        id={questions[currentQuestion].id}
        text={questions[currentQuestion].text}
        answerOptions={questions[currentQuestion].answerOptions}
        correctAnswer={questions[currentQuestion].correctAnswer}
        completed={questions[currentQuestion].completed}
        increaseScore={() => setCorrectAnswerCounter(correctAnswerCounter + 1)}
        numberOfQuestions={questions.length}
        currentQuestion={currentQuestion}
        onChangeQuestion={() => {
          if (currentQuestion + 1 == questions.length) {
            handleTestFinished()
          }

          if (currentQuestion + 1 != questions.length) {
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
