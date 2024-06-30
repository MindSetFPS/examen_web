import { useState } from "react";
import { Test } from "./components/Test";
import { ResultScreen} from "./components/ResultScreen";

const App = (): JSX.Element => {
  const [testFinished, setTestFinished] = useState<Boolean>(false);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Examen en Línea</h1>

        {
          testFinished ? 
            <ResultScreen/> 
            : 
            <Test/>
          }


      </div>
    </div>
  );
};

export default App;
