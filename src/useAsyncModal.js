import { useContext } from "react";
import { ModalContext } from "./ModalContext";

const useAsyncModal = () => {
    const modalCtx = useContext(ModalContext);

    const confirm = async () => {
        modalCtx.setIsModalOpen(true);
        const response = await modalCtx.forUserToConfirm();
        return response;
    }
    return {confirm};
}

export default useModal;