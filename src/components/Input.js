import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgba(169, 158, 126, 0.8)",
    },
    "& label": {
      color: "rgba(169, 158, 126, 0.8)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(169, 158, 126, 0.8)",
    },
  },
})(TextField);

const InputComponent = (props) => {
  return (
    <CssTextField
      {...props}
      color="#fff"
      InputProps={{
        style: {
          color: "#fff",
        },
      }}
    />
  );
};

export default InputComponent;
