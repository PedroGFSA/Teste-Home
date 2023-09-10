import React from "react";

export const Context = React.createContext();

export const ContextStorage = ({children}) => {
  const [modal, setModal] = React.useState(false);
  

  return <Context.Provider value={{modal, setModal}}>
    {children}
  </Context.Provider>
}