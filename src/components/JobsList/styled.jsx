import { Field, Form, Formik } from "formik";
import styled from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  height: auto;
`;

export const TextSearch = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 20px;
  }
`;

export const SearcherLayout = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FieldInput = styled(Field)`
  height: 40px;
  border-radius: 10px 0px 0px 10px;
  background-color: white;
  border: none;
  width: 60%;
  box-shadow: 3px 5px 17px 4px rgba(0, 0, 0, 0.69);
`;

export const Button = styled.button`
  color: white;
  display: inline-block;
  border-radius: 0px 10px 10px 0px;
  border: none;
  width: 110px;
  height: 42px;
  background: #1b1b1b;
  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.64);
`;
