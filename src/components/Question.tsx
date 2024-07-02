import { useState } from "react";
import { type Questions } from "../types";

interface Props extends Questions {
  onChildEvent: () => void;
  onShowNextButton: () => void;
}
export const Question: React.FC<Props> = ({
  id,
  text,
  answerOptions,
  correctAnswer,
  completed,
  onChildEvent,
  onShowNextButton
}) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChildEvent()
    onShowNextButton()
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
                  checked={selectedOption == option}
                  onChange={() => handleOptionClick(option)} />
                {option}
              </div>
            ))
          }
        </form>
      </div>
    </div>)
}