"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type ModalContextType = {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// Context definition
export const ModalContext = createContext<ModalContextType | undefined>(
    undefined,
);

// Context Provider
export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{ openModal, setOpenModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// use customhook to consume the context
export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }

    return context;
};
