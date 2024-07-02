import { useState } from "react";
import { type Questions } from "../types";

interface Props extends Questions {
  onChildEvent: (event: React.MouseEvent<HTMLInputElement>) => void;
}
export const Question: React.FC<Props> = ({
  id,
  text,
  answerOptions,
  correctAnswer,
  completed,
  onChildEvent,
}) => {
  function setIsCorrectAnswer() {
    onChildEvent()
  }
  return (
    <div className="view">
      <h2 className="font-medium text-3xl">{text}</h2>
      <div >
        <form>
          {
            answerOptions.map((option) => (
              <div className={`bg-white ${option == correctAnswer ? 'bg-green-100' : 'bg-red-100'}`}>
                <span >
                  {'🍿'}
                </span>
                <input
                  type="radio"
                  value={option}
                  onClick={setIsCorrectAnswer} />
                {option}
              </div>
            ))
          }
        </form>
      </div>

    </div>)
}