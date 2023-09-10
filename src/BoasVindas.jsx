import React from "react";
import Modal from "./Modal.jsx";
import { Context } from "./Context.jsx";

const BoasVindas = () => {
  const context = React.useContext(Context);
  
  const faturas = [];
  faturas.push(122)
  faturas.push(122)

  function handleFaturas() {
    if (faturas.length === 0) {
      return(<p className="semFatura">Você não possui nenhuma fatura em aberto. <span>Suas contas estão todas em dia, parabéns!</span></p>)
    }
    else if (faturas.length === 1) {
      return(<div>
      <p>Fatura <b>{"{{mês corrente}}"}</b></p>
      <p id="valor">R$ 231,45</p>
      <button
        onClick={() => {
          context.setModal(!context.modal);
        }}
      >
        Pagar Fatura
      </button>
    </div>)
    }
    else {
      return(<div>
        <p className="faturas" style={{marginBottom: '1.5rem'}}><span>Você possui {faturas.length} faturas em aberto.</span> <br />Clique em <span>Pagar Faturas</span> regularizar sua situação...</p>
        <button
        onClick={() => {
          context.setModal(!context.modal);
        }}
      >
        Pagar Faturas
      </button>
      </div>)
    }
  }

  return (
    <section>
      <div className="boasvindas">
        <h3>Olá, Ariel!</h3>
        {handleFaturas()}
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
