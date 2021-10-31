import React, { useContext } from "react";
import {
  Button,
  FieldInput,
  FormStyled,
  MainLayout,
  SearcherLayout,
  TextSearch,
} from "./styled";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Context } from "../../context/context";

const JobsList = () => {
  const { data, setData } = useContext(Context);
  const { state, setState } = useContext(Context);
  const { loader, setLoader } = useContext(Context);

  const getRelatedJobs = async (subject) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "skill/role": {
          text: "javascript",
          proficiency: "proficient",
        },
      }),
    };

    let res = await fetch(
        `https://torre-back-test.herokuapp.com/users/${subject}`,
        requestOptions
      ),
      json = await res.json();

    return json;
  };
  return (
    <MainLayout>
      <TextSearch>
        <h1>{state}</h1>
        <h3> Puedes encontrar tu mejor Candidato! </h3>
      </TextSearch>
      <SearcherLayout>
        <Formik
          initialValues={{ job: "" }}
          validationSchema={Yup.object({
            job: Yup.string().required("Required"),
          })}
          onSubmit={async (values) => {
            setLoader(true);
            setData(await getRelatedJobs(values.job));
            setState(true);

            console.log(await data);
            setLoader(false);
          }}
        >
          <FormStyled>
            <FieldInput name="job" type="text" />
            <ErrorMessage name="firstName" />

            <Button type="submit">Submit</Button>
          </FormStyled>
        </Formik>
      </SearcherLayout>
    </MainLayout>
  );
};

export default JobsList;
