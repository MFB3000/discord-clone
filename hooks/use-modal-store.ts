import {create} from "zustand";

export type ModalType = "createServer";

interface ModalStore{
    type:ModalType | null;
    isOpen: boolean;
    onOpen: (type: ModalType) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    isOpen: false,
    onOpen: (t) => set({isOpen: true, type: t}),
    onClose: () => set({type: null, isOpen: false})
}));