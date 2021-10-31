import React, { useState } from "react";

export const Context = React.createContext();

const ContextProvider = (props) => {
  const [data, setData] = useState();
  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);
  const [dataModal, setDataModal] = useState("");
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState();
  return (
    <Context.Provider
      value={{
        data,
        setData,
        state,
        setState,
        modal,
        setModal,
        dataModal,
        setDataModal,
        loader,
        setLoader,
        user,
        setUser,
      }}
    >
      {" "}
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
