import logo from "./logo.svg";
import "./App.css";
import Modal from "./Modal";
import { useEffect, useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onResponseClick = (response) => {
    setIsModalOpen(false);
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isModalOpen && <Modal onResponseClick={onResponseClick} />}
        <button onClick={() => {setIsModalOpen(true);}}>
          Open Modal
        </button>
      </header>
    </div>
  );
}

export default App;
