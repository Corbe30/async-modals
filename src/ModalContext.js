import { createContext, useState } from 'react';
import Modal from './Modal';
export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [response, setResponse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onResponseClick = (val) => {
        setIsModalOpen(false);
        setResponse(val);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, response }}>
            {isModalOpen && <Modal onResponseClick={onResponseClick} />}
            {children}
        </ModalContext.Provider>
    );
}