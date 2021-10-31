import React from "react";

import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <Loader
      type="Puff"
      color="#1E5128"
      height={100}
      width={100}
      timeout={2000} //3 secs
    />
  );
};

export default Loading;
