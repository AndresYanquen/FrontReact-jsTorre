import React, { useContext } from "react";
import { Context } from "../../context/context";

const UserDetail = (props) => {
  const { data } = useContext(Context);
  const { state, setState } = useContext(Context);
  const { modal, setModal } = useContext(Context);
  const { dataModal, setDataModal } = useContext(Context);
  const { loader, setLoader } = useContext(Context);
  console.log(10, data);
  console.log(11, state);
  console.log(12, dataModal);
  return <></>;
};

export default UserDetail;
