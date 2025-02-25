import logo from "./logo.svg";
import "./App.css";
import Modal from "./Modal";
import { useEffect, useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState(null);

  const onClickHandler = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div className="App">
      <header className="App-header">
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setResponse={setResponse}
        />
        <button onClick={onClickHandler}>Open Modal</button>
      </header>
    </div>
  );
}

export default App;
