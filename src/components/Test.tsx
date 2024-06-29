import { type ListOfQuestions } from "../types";
import { ToTestItem } from "./ToTestItem";

interface Props {
  totest: ListOfQuestions;
  onRemoveAns: (id: string) => void;
}

export const ToTest: React.FC<Props> = ({ totest, onRemoveAns }) => {
  return (
    <ul className="test-list">
      {totest.map((item) => (
        <li key={item.id} className={`${item.completed ? "completed" : ""}`}>
          <ToTestItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            completed={item.completed}
          />
        </li>
      ))}
    </ul>
  );
};

// funcion para seleccionar las preguntas

// variable use state para saber en que pregunta estoy

// funcion en boton para pasar a la siguiente pregunta

// si estoy en la ultima pregunta
// mostrar los aciertos
