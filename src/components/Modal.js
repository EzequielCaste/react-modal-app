import './Modal.css'

const Modal = ({isOpen, closeModal, title, children}) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  }
  return (
    <div onClick={closeModal} className={`modal ${isOpen && 'modal-open'}`}>
      <div onClick={handleModalClick} className="modal__dialog">
        <h1>{title}</h1>
        {children}
        <button onClick={closeModal}>
          Close Modal
        </button>
      </div>      
    </div>
  )
}

export default Modal

