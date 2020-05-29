import React from "react";

import Logo from "components/Logo";
import Input from "components/Input";

import { Container, Form, CustomButton } from "./styles";

const FormAuth = () => {
  return (
    <Form noValidate autoComplete="off">
      <Input label="Email" />
      <Input label="Password" style={{ marginBottom: 20 }} />
      <CustomButton variant="outlined">Login</CustomButton>
    </Form>
  );
};

const LoginPage = () => {
  return (
    <Container>
      <Logo />
      <FormAuth />
    </Container>
  );
};

export default LoginPage;
