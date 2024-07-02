import { useState } from "react";
import { type Questions } from "../types";

interface Props extends Questions {
  increaseScore: () => void;
  onShowNextButton: () => void;
  onChangeQuestion: () => void;
  numberOfQuestions: number;
  currentQuestion: number;
}
export const Question: React.FC<Props> = ({
  id,
  text,
  answerOptions,
  correctAnswer,
  completed,
  numberOfQuestions,
  currentQuestion,
  increaseScore,
  onShowNextButton,
  onChangeQuestion
}) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showNextButton, setShowNextButton] = useState<boolean>(false)

  const handleOptionClick = (option: string) => {
    console.log(selectedOption == null)
    if (selectedOption == null) {
      setSelectedOption(option);
      if (selectedOption == correctAnswer) {
        increaseScore()
      }
    }

    setShowNextButton(!showNextButton)
  }
  
  function nextQuestion(e) {
    e.preventDefault()
    // if (numberOfQuestions != currentQuestion + 1) {
      // setCurrentQuestion(currentQuestion + 1);
      onChangeQuestion() 
    // }
    
    // if (numberOfQuestions == currentQuestion + 1) {
      // handleTestFinished()
    // }
    setSelectedOption(null)
    setShowNextButton(false)
  }


  return (
    <div className="view">
      <h2 className="font-medium text-3xl">{text}</h2>
      <div >
        {selectedOption}
        <form>
          {
            answerOptions.map((option, index) => (
              <div key={index}>
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

          {
            showNextButton ?
              <button
                className="destroy"
                onClick={(e) => nextQuestion(e)}
              >
                {numberOfQuestions == currentQuestion + 1 ? 'amonos' : 'siguiente'}
              </button>
              :
              ''
          }

        </form>
      </div>
    </div>)
}