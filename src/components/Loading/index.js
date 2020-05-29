import React from "react";
import "./custom_load.css";

import LoaderSvg from "./custom_load.svg";

const LoadingComponent = () => {
  return (
    <div className="customLoading">
      <div
        className="customLoadingImage play"
        style={{
          backgroundImage: `url(${LoaderSvg})`,
        }}
      />
    </div>
  );
};

export default LoadingComponent;
