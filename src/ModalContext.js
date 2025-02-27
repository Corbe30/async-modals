import { createContext, useState } from "react";
import Modal from "./Modal";
export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [settlePromise, setSettlePromise] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onResponseClick = (val) => {
    setIsModalOpen(false);
    settlePromise.resolve(val);
  };

  const forUserToConfirm = () => {
    const confirmPromise = new Promise((resolve, reject) => {
      setSettlePromise({ resolve, reject });
    });
    return confirmPromise;
  };

  return (
    <ModalContext.Provider value={{ setIsModalOpen, forUserToConfirm }}>
      {isModalOpen && <Modal onResponseClick={onResponseClick} />}
      {children}
    </ModalContext.Provider>
  );
};
