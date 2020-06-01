import styled from "styled-components";

import { Container as ContainerTheme } from "theme/styles";

export const Container = styled(ContainerTheme)`
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: 100vh;
    height: 100%;
    overflow-x: hidden;
    width: 100%;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 10px;
  border-right: 1px solid rgba(169, 158, 126, 0.1);
  @media (min-width: 1024px) {
    flex: 1;
  }
  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid rgba(169, 158, 126, 0.1);
    max-height: 300px;
    .buttons {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 3;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 20px;

  @media (min-width: 1024px) {
    overflow: scroll;
    height: 100vh;
  }

  @media (max-width: 1024px) {
    overflow: none;
    height: 100%;
    min-height: 100vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const VideoLink = styled.a`
  margin: 20px 15px;
  border: 1px solid #a99e7e;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
export const VideoContent = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: url(${(props) => props.backgroundUrl}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const VideoTitle = styled.p`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.6);
`;
