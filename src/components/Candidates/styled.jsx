import styled from "styled-components";

export const CardUser = styled.div`
  margin-top: 50px;
  color: white;
  width: 320px;
  height: 400px;
  background-color: #191a19;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  align-items: center;
  img {
    margin-top: 30px;
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
  h1 {
    margin-top: 5px;
    text-align: center;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 50px;
  background-color: #d8e9a8;
  border: none;
  border-radius: 10px;
`;

export const Message = styled.div`
  color: white;
  background-color: #191a19;
  width: 320px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LayoutCandidates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    grid-gap: 10px;
  }
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto;
  }

  @media (min-width: 1400px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: auto;
  }
`;
