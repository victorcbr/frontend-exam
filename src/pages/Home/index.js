/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect, useCallback } from "react";

import { AuthContext } from "context/AuthContext";

import {
  Container,
  Menu,
  Content,
  VideoLink,
  VideoContent,
  VideoTitle,
} from "./styles";
import { CustomButton } from "theme/styles";

import Logo from "components/Logo";

import { getVideosByPlaylist } from "config/api";

const Home = ({ history }) => {
  const [authState, updateAuth] = useContext(AuthContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!authState.loggedIn) return history.push("/login");
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    _getVideos();
    // eslint-disable-next-line
  }, []);

  const _getVideos = useCallback(async () => {
    return await getVideosByPlaylist().then(({ items }) => {
      return setVideos(items);
      // return
    });
  }, []);

  const _signOut = async () => {
    return await updateAuth({
      ...authState,
      loggedIn: false,
      user: {},
    });
  };

  const VideosList = () => {
    const VideosMap = videos.map((item) => {
      return (
        <VideoLink
          href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}&list=${item.snippet.playlistId}`}
          target="_blank"
          rel="noreferrer"
          key={item.snippet.resourceId.videoId}
        >
          <VideoContent
            width={item.snippet.thumbnails.high.width}
            height={item.snippet.thumbnails.high.height}
            backgroundUrl={item.snippet.thumbnails.high.url}
          >
            <VideoTitle>{item.snippet.title}</VideoTitle>
          </VideoContent>
        </VideoLink>
      );
    });
    return VideosMap;
  };

  return (
    <Container>
      <Menu>
        <Logo />
        <div>
          <CustomButton fullWidth>Trailers</CustomButton>
          <CustomButton
            fullWidth
            variant="text"
            onClick={() => _signOut()}
            textcolor="#fff"
          >
            logout
          </CustomButton>
        </div>
      </Menu>

      <Content>
        <VideosList />
        <div
          style={{
            fontSize: 38,
            color: "orange",
            width: 480,
            height: 360,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomButton>Load More</CustomButton>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
