import React, { useContext, useEffect } from "react";

import { AuthContext } from "context/AuthContext";

import { Container } from "./styles";

const Home = ({ history }) => {
  const [authState, updateAuth] = useContext(AuthContext);

  useEffect(() => {
    if (!authState.loggedIn) return history.push("/login");
  }, []);

  return (
    <Container>
      <p>teste</p>
    </Container>
  );
};

export default Home;
