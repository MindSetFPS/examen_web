import { useState } from "react";
import { Test } from "./components/Test";
import { ResultScreen} from "./components/ResultScreen";

const App = (): JSX.Element => {
  const [testFinished, setTestFinished] = useState<Boolean>(false);

  return (
    <div className="App w-screen h-screen">
        <h1 className="text-7xl font-bold">Examen en Línea</h1>
      <div className="App-header h-full flex justify-center content-center items-center self-center">

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
