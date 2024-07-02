import { useState } from "react";
import { type Questions } from "../types";

interface Props extends Questions {
  onRemoveAns: (id: string) => void;
  onSelectionOption: (id: string, selectedOption: string) => void;
}
export const Question: React.FC<Questions> = ({
  id,
  text,
  answerOptions,
  correctAnswer,
  completed,
  // onRemoveAns,
  // onSelectionOption,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div className="view">
      <label>{text}</label>
      <div>
        <form>
          {answerOptions.map((option, index) => (
            <label htmlFor={option}>
              <input type="radio" key={index} value={option} />
              {option}
            </label>
          ))}
        </form>
      </div>
      {/* <button
        className="destroy"
        onClick={() => {
          onRemoveAns(id);
        }}
      > Enviar </button> */}
    </div>
  );
};
