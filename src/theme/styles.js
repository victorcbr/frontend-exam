import styled from "styled-components";
import ImgBackground from "theme/images/background.jpg";
import { Button } from "@material-ui/core";

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

export const CustomButton = styled(Button)`
  && {
    border-radius: 3px;
    border: ${(props) => (props.variant ? null : "1px solid #a99e7e")};
    color: ${(props) => props.textcolor || "#a99e7e"};
    margin: 20px auto;
    padding: 11px 35px;
    text-transform: uppercase;
  }
`;
