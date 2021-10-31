import styled from "styled-components";

export const OverLay = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  color: white;
  position: absolute;
  width: 500px;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none;
  overflow-y: scroll;
  max-height: 80vh;
  background-color: #4e9f3d;
  position: relative;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

export const BodyModal = styled.div`
  margin-top: 70px;
  h5 {
    margin-top: 5px;
    color: #191a19;
  }
`;

export const HeaderModal = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  background-color: #191a19;
  border-radius: 10px;
  h3 {
    margin-top: 10px;
    font-weight: 500;
    font-size: 15px;
  }
`;

export const LayoutSkills = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3 ease all;
  border-radius: 5px;
  color: #1766dc;

  &:hover {
    background: #f2f2f2;
  }
`;

export const ButtonSkill = styled.button`
  color: white;
  border: none;
  width: auto;
  height: 40px;
  background-color: #191a19;
  margin-top: 5px;
  border-radius: 10px;
`;
