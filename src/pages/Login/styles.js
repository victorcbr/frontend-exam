import styled, { css } from "styled-components";
import ImgBackground from "theme/images/background.jpg";
import { TextField, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

export const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background: url(${ImgBackground}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

export const Input = styled(TextField)``;

export const CustomButton = styled(Button)`
  && {
    border-radius: 3px;
    border: 1px solid #a99e7e;
    color: #a99e7e;
    margin: 20px auto;
    padding: 11px 35px;
    text-transform: uppercase;
  }
`;
