interface ToTestItemProps {
  id: number;
  question: string;
  answer: string;
  completed: boolean;
}

export const Answer: React.FC<ToTestItemProps> = ({
  id,
  question,
  answer,
  completed,
}) => {
  return (
    <div>
      <h2>
        {id}
        {question}
      </h2>
      <p>{answer}</p>
      <p>{completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};
