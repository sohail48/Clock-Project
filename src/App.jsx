import { useState } from "react";
import '../src/App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [Ctime, SetCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    SetCtime(time)
  };

  setInterval(UpdateTime, 1000);

  return(
    <div className="container">
      <h1>{Ctime}</h1>
    </div>
  );
};

export default App;