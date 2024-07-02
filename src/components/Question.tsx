import React, { useState, useEffect } from "react";
import { type Questions } from "../types";

interface Props extends Questions {
  increaseScore: () => void;
  onShowNextButton: () => void;
  onTimeout: () => void;
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
  onTimeout,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeout]);

  useEffect(() => {
    setTimeLeft(15);
  }, [id]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === correctAnswer) {
      increaseScore();
    }
    onShowNextButton();
  };

  return (
    <div className="view">
      <h2 className="font-medium text-3xl">{text}</h2>
      <p>Time left: {timeLeft} seconds</p>
      <div>
        <form>
          {answerOptions.map((option) => (
            <div
              key={option}
              className={`hover:bg-gray-200 transition rounded-md ${
                selectedOption === correctAnswer && selectedOption == option
                  ? "hover:bg-green-200 bg-green-100"
                  : "bg-red-100"
              } ${
                selectedOption != null &&
                selectedOption == option &&
                option != correctAnswer
                  ? "bg-red-100"
                  : "bg-white"
              }  `}
            >
              {selectedOption == option ? <span>{"🍿"}</span> : ""}
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionClick(option)}
              />
              {option}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};
