import logo from "./logo.svg";
import "./App.css";
import Modal from "./Modal";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "./ModalContext";

function App() {
  const modalCtx = useContext(ModalContext);

  const onClickHandler = () => {
    modalCtx.setIsModalOpen(true);
  };

  useEffect(() => {
    if (!modalCtx?.isModalOpen) console.log(modalCtx?.response);
  }, [modalCtx?.isModalOpen]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClickHandler}>Open Modal</button>
      </header>
    </div>
  );
}

export default App;
