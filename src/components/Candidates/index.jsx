import React, { useContext } from "react";
import { Context } from "../../context/context";
import Loading from "../Loading";
import ModalWindow from "../ModalWindow";
import { Button, CardUser, LayoutCandidates, Message } from "./styled";

export const Candidates = () => {
  const { data, setData } = useContext(Context);
  const { state, setState } = useContext(Context);
  const { modal, setModal } = useContext(Context);
  const { dataModal, setDataModal } = useContext(Context);
  const { loader, setLoader } = useContext(Context);

  return (
    <LayoutCandidates>
      {loader && <Loading></Loading>}

      {state ? (
        data.results.map((p) => (
          <CardUser key={p.ggId}>
            <img
              src={p.picture}
              onError={(e) => {
                e.target.src = "images/userUnkown.png";
              }}
            />
            {/*             <img
              src={this.props.SRC}
              onError={(e) => {
                e.target.src = DEFAULT_IMG;
              }}
            /> */}
            <h1> {p.name}</h1>
            <br></br>
            <h1>{p.locationName}</h1>
            <h1> {p.professionalHeadline}</h1>
            <Button
              onClick={() => {
                setModal(true);
                setDataModal(p);
              }}
            >
              {" "}
              Ver habilidades{" "}
            </Button>
          </CardUser>
        ))
      ) : (
        <Message>
          <h1> Ingresa Un valor para buscar Candidatos</h1>
        </Message>
      )}
      <ModalWindow
        state={modal}
        setModalState={setModal}
        data={dataModal}
      ></ModalWindow>
    </LayoutCandidates>
  );
};
