import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "context/AuthContext";

import Logo from "components/Logo";
import Input from "components/Input";
import Loading from "components/Loading";

import { Container, Form, CustomButton } from "./styles";

const LoginPage = () => {
  const [authState, updateAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const _signIn = () => {
    setLoading(true);
    setTimeout(() => {
      updateAuth({
        ...authState,
        loggedIn: true,
        user,
      });
      setLoading(false);
    }, 1500);
  };

  if (loading) return <Loading />;

  const _inputHandle = ({ name, value }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <Container>
      <Logo />
      <Form noValidate autoComplete="off">
        <Input
          name="email"
          label="Email"
          onChange={(e) => _inputHandle(e.target)}
          value={user.email}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          onChange={(e) => _inputHandle(e.target)}
          style={{ marginBottom: 20 }}
          value={user.password}
        />
        <CustomButton variant="outlined" onClick={() => _signIn()}>
          Login
        </CustomButton>
      </Form>
    </Container>
  );
};

export default LoginPage;
