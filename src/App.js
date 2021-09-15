import GalleryModal from "./components/GalleryModal";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
  const [isOpenGalleryModal, openGalleryModal, closeGalleryModal] = useModal();

  return (
    <div>
      <button onClick={openLoginModal}>Open Login Modal</button>
      <button onClick={openChatModal}>Open Chat Modal</button>
      <button onClick={openGalleryModal}>Open Gallery Modal</button>

      <GalleryModal
        isOpen={isOpenGalleryModal}
        closeModal={closeGalleryModal}
      />

      <Modal 
        isOpen={isOpenLoginModal}
        closeModal={closeLoginModal}
        title="Login"
      >
        <form action="#">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
      </Modal>

      <Modal 
        isOpen={isOpenChatModal}
        closeModal={closeChatModal}
        title="Chat"
      >
        <p>Hola <strong>- Ezequiel</strong></p>
      </Modal>
    </div>
  );
}

export default App;
