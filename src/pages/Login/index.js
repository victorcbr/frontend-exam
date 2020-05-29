import React, { useState, useEffect, useContext } from "react";

import { makeLogin } from "./utils";

import { AuthContext } from "context/AuthContext";

import Logo from "components/Logo";
import Input from "components/Input";
import Loading from "components/Loading";

import { Container, Form, CustomButton } from "./styles";

const LoginPage = ({ history }) => {
  const [authState, updateAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // just to show loading component
    if (authState.loggedIn) return history.push("/");
  }, []);

  useEffect(() => {
    // just to show loading component
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const _signIn = async () => {
    setLoading(true);
    let status = await makeLogin({ ...user });

    if (!status) {
      alert("Error, please check your credentials");
      return setLoading(false);
    }

    await updateAuth({
      ...authState,
      loggedIn: true,
      user,
    });

    setLoading(false);

    return history.push("/");
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
