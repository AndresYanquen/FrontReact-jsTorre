import React, { useContext } from "react";
import {
  BodyModal,
  ButtonClose,
  ContainerModal,
  HeaderModal,
  LayoutSkills,
  OverLay,
  ButtonSkill,
} from "./styled";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";

const ModalWindow = ({ children, state, setModalState, data }) => {
  const routeData = {
    pathname: `/${data.username}`,
    data: data,
  };
  console.log(data.skills);
  const { user, setUser } = useContext(Context);
  return (
    <>
      {state && (
        <OverLay>
          <ContainerModal>
            <HeaderModal>
              <h3>{data.name}</h3>
              <ButtonClose onClick={() => setModalState(!state)}>x</ButtonClose>
            </HeaderModal>

            <BodyModal>
              <LayoutSkills>
                <h5>NAME</h5>
                <h5> WEIGHT</h5>{" "}
              </LayoutSkills>
              {data.skills.map((p) => (
                <LayoutSkills>
                  <Link to={routeData} target="_blank">
                    <ButtonSkill>{p.name}</ButtonSkill>
                  </Link>
                  <h1> {p.weight}</h1>{" "}
                </LayoutSkills>
              ))}
            </BodyModal>

            {children}
          </ContainerModal>
        </OverLay>
      )}
    </>
  );
};

export default ModalWindow;
