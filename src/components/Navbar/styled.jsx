import styled from "styled-components";

export const NavbarLayout = styled.div`
  color: white;
  width: 100%;
  height: 50px;
  background-color: #191a19;
  display: flex;

  align-items: center;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  li {
    margin: 10px 20px;
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
