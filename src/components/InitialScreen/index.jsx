import React from "react";
import {
  ImageDescription,
  InitialScreenLayout,
  TextDescription,
} from "./styled";

const InitialScreen = () => {
  return (
    <InitialScreenLayout>
      <TextDescription>
        <h1> ¡Busca talentos según la tecnología!</h1>
        <h3>¡Podrás encontrar los candidatos que se ajusten a tu perfil!</h3>
      </TextDescription>
      <ImageDescription>
        <img src={"images/job.png"} alt="work" />
      </ImageDescription>
    </InitialScreenLayout>
  );
};

export default InitialScreen;
