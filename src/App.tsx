import { useState } from "react";
import { ToTest } from "./components/ToTest";
import { ListOfQuestions } from "./types";

const initialQuestions: ListOfQuestions = [
  {
    id: "1",
    question: "¿Cuál es la capital de Francia?",
    options: ["Madrid", "París", "Roma", "Berlín"],
    answer: "París",
    completed: false,
  },
  {
    id: "2",
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    answer: "Nilo",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [questions, setQuestions] = useState<ListOfQuestions>(initialQuestions);

  const handleRemove = (id: string) => {
    setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
  };

  const handleSelectOption = (id: string, selectedOption: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, selectedOption } : q))
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Examen en Línea</h1>
        {questions.map((q) => (
          <ToTest
            key={q.id}
            id={q.id}
            question={q.question}
            options={q.options}
            answer={q.answer}
            completed={q.completed}
            onRemoveAns={handleRemove}
            onSelectionOption={handleSelectOption}
          />
        ))}
      </header>
    </div>
  );
};

export default App;
