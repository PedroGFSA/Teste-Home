import React from 'react'
import { Context } from './Context'

const Modal = () => {
  const context = React.useContext(Context)

  function handleModal({target}) {
    if (target.classList.contains("modal")) {
      context.setModal(false);
    }
  }
  return (
    <div className="modal" onClick={handleModal}>
      <div className='modal-content'>
        <p>Pagar a fatura de {"{{mês corrente}}"}</p>
        <p>Valor:</p>
        <span>R$231,45</span>
        <button>Copiar código de barras</button>
      </div>
      
    </div>
  )
}

export default Modal