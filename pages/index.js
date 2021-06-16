import { useState } from "react";
import Modal from "react-modal";

export default function Home() {
  // Make sure to bind modal to your appElement
  Modal.setAppElement("#__next");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="content">
          <h1>Hello</h1>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>

      <style jsx>
        {`
          .container {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #475cf5;
          }

          .content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            width: 100%;
            height: 100%;
            background: #efc502;
          }
        `}
      </style>
    </div>
  );
}
