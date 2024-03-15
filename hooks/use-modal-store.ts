import { ChannelType, Server, Channel } from "@prisma/client";
import {create} from "zustand";

export type ModalType = "createServer" | "invite" | "editServer" | "members" 
| "createChannel" | "leaveServer" | "deleteServer" | "deleteChannel" |"editChannel";

interface ModalData {
    server?: Server;
    channelType?: ChannelType;
    channel?: Channel;
}
interface ModalStore{
    type:ModalType | null;
    data: ModalData
    isOpen: boolean;
    onOpen: (type: ModalType, data: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (t, data = {}) => set({isOpen: true, type: t, data}),
    onClose: () => set({type: null, isOpen: false})
}));