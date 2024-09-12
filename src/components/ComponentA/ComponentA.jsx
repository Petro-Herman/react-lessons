import { useState } from "react";

export default function ComponentA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={openModal}>Open modal</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};