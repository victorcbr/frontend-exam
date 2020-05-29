import styled from "styled-components";

import { Container as ContainerTheme } from "theme/styles";

export const Container = styled(ContainerTheme)`
  flex-direction: row;
  /* TODO */
  /* @media screen {
    flex-direction: column;
  } */
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 10px;
  border-right: 1px solid rgba(169, 158, 126, 0.1);
`;

export const Content = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;
