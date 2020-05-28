import React from "react";

import Logo from "theme/images/logo.png";
import Logo2x from "theme/images/logo@2x.png";

const LogoComponent = () => {
  return (
    <img src={Logo} srcSet={Logo2x} alt="Logo" width="100%" style={styles} />
  );
};

const styles = {
  maxWidth: "274px",
  maxHeight: "137px",
};

export default LogoComponent;
