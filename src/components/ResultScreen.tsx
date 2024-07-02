<<<<<<< HEAD
import React from "react";
import { Test, type questionsList } from "./Test";

interface ResultScreenProps {
  totalCorrect: number;
  totalQuestions: number;
  onRetry: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  totalCorrect,
  totalQuestions,
  onRetry,
}) => {
  return (
    <div>
      <h1>Resultados</h1>
      <p>
        Felicidades, sacaste {totalCorrect} de {totalQuestions} preguntas
        correctas.
      </p>
      <button onClick={onRetry}>Repetir el examen</button>
    </div>
  );
};
=======
export  function ResultScreen(){
    return (
        <>

            <h1>Pantalla de resultados</h1>
        
        </>
    )
}
>>>>>>> origin/master
