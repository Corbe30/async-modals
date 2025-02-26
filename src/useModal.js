import { useContext } from "react";
import { ModalContext } from "./ModalContext";

const useModal = () => {
    const modalCtx = useContext(ModalContext);

    const confirm = async () => {
        modalCtx.setIsModalOpen(true);
        const a = await modalCtx.forUserToConfirm();
        return a;
    }
    return {confirm};
}

export default useModal;