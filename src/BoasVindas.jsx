import React from "react";
import Modal from "./Modal.jsx";
import { Context } from "./Context.jsx";

const BoasVindas = () => {
  const context = React.useContext(Context);

  return (
    <section>
      <div className="boasvindas">
        <h3>Olá, Ariel!</h3>
        <p>Fatura (mês corrente)</p>
        <p>R$ 231,45</p>
        <button
          onClick={() => {
            context.setModal(!context.modal);
          }}
        >
          Pagar Fatura
        </button>
      </div>

      <ul className="opcoes">
        <li>Agendar Consulta</li>
        <li>Minhas Faturas</li>
        <li>Carteirinha Digital</li>
      </ul>

      {context.modal && <Modal />}
    </section>
  );
};

export default BoasVindas;
