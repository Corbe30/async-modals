import logo from "./logo.svg";
import "./App.css";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState(null);

  let message = "agree to TnC?";
  if (response == true) message = "Clicked yes.";
  if (response == false) message = "Clicked no.";

  const onClickHandle = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen} setResponse={setResponse} />
        )}
        <p>{message}</p>
        <button
          onClick={() => {
            onClickHandle();
          }}
        >
          Open Modal
        </button>
      </header>
    </div>
  );
}

export default App;
