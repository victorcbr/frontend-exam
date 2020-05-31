import React, { useContext, useEffect } from "react";

import { AuthContext } from "context/AuthContext";

import { Container, Menu, Content } from "./styles";
import { CustomButton } from "theme/styles";

import Logo from "components/Logo";

const Home = ({ history }) => {
  const [authState, updateAuth] = useContext(AuthContext);

  useEffect(() => {
    if (!authState.loggedIn) return history.push("/login");
  }, [authState.loggedIn, history]);

  const _signOut = async () => {
    return await updateAuth({
      ...authState,
      loggedIn: false,
      user: {},
    });
  };

  return (
    <Container>
      <Menu>
        <Logo />
        <div>
          <CustomButton fullWidth style={styles.trailerButton}>
            Trailers
          </CustomButton>
          <CustomButton
            fullWidth
            variant="text"
            color="#fff"
            onClick={() => _signOut()}
          >
            logout
          </CustomButton>
        </div>
      </Menu>

      <Content />
    </Container>
  );
};

const styles = {
  logo: {
    marginTop: 100,
  },
  trailerButton: { padding: 5, margin: "50px auto 0" },
};

export default Home;
