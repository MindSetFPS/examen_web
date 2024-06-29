import { useState } from "react";
import { type Questions } from "../types";

interface Props extends Questions {
  onRemoveAns: (id: string) => void;
  onSelectionOption: (id: string, selectedOption: string) => void;
}
export const ToTest: React.FC<Props> = ({
  id,
  question,
  options,
  answer,
  completed,
  onRemoveAns,
  onSelectionOption,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onSelectionOption(id, option);
  };
  return (
    <div className="view">
      <label>{question}</label>
      <div>
        {options.map((option) => (
          <div key={option}>
            <input
              type="radio"
              id={`${id}-${option}`}
              name={`question-${id}`}
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <label htmlFor={`${id}-${option}`}>{option}</label>
          </div>
        ))}
      </div>
      <button
        className="destroy"
        onClick={() => {
          onRemoveAns(id);
        }}
      />
    </div>
  );
};
