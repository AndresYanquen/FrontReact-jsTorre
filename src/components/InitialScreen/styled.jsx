import styled from "styled-components";

export const InitialScreenLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

export const TextDescription = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  justify-content: center;
  width: 340px;
  height: 300px;
  h1 {
    font-size: 2.5rem;
    text-align: left;
    font-weight: 600;
  }
  h3 {
    font-size: 20px;
  }

  @media (min-width: 360px) {
    h1 {
      font-size: 30px;
      text-align: left;
    }
    h3 {
      margin-top: 50px;
      font-size: 20px;
    }
  }
`;

export const ImageDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  width: auto;
  height: auto;
  img {
    width: 400px;
    height: 300px;
  }
`;
