import { useState } from 'react'

const useModal = (initialState = false) => {
  const [isOpenModal, setOpenModal] = useState(initialState);

  const openModal = () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }

  return [isOpenModal, openModal, closeModal]
}

export default useModal
