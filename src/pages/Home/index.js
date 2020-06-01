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

import { Modal, Grow, Fade, CircularProgress } from "@material-ui/core";

const Home = ({ history }) => {
  const [authState, updateAuth] = useContext(AuthContext);
  const [videos, setVideos] = useState([]);
  const [videosSlice, setVideosSlice] = useState([]);
  const [modal, setModal] = useState({
    open: false,
    video: "",
  });
  const [after, setAfter] = useState(3);
  const [loadingMore, setLoadingMore] = useState(true);

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
      setVideosSlice(items.slice(0, 3));
      setLoadingMore(false);
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
    const VideosMap = videosSlice.map((item) => {
      return (
        <Grow in key={item.snippet.resourceId.videoId}>
          <VideoLink
            href="#"
            rel="noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setModal({
                open: true,
                video: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}?autoplay=1`,
              });
            }}
          >
            <VideoContent
              width={item.snippet.thumbnails.high.width}
              height={item.snippet.thumbnails.high.height}
              backgroundUrl={item.snippet.thumbnails.high.url}
            >
              <VideoTitle>{item.snippet.title}</VideoTitle>
            </VideoContent>
          </VideoLink>
        </Grow>
      );
    });
    return VideosMap;
  };

  const doMore = () => {
    setLoadingMore(true);

    setTimeout(() => {
      setLoadingMore(false);
      setVideosSlice(videos.slice(0, after + 8));
      setAfter(after + 8);
    }, 1500);
  };

  const LoadMoreButton = () => {
    return (
      videos.length !== after && (
        <Fade in={true}>
          <CustomButton onClick={() => doMore()}>Load More</CustomButton>
        </Fade>
      )
    );
  };

  const LoadMoreProgress = () => {
    return (
      <Fade in={true}>
        <CircularProgress style={styles.color} />
      </Fade>
    );
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
        <div style={styles.div}>
          {loadingMore ? <LoadMoreProgress /> : <LoadMoreButton />}
        </div>
      </Content>

      <Modal
        open={modal.open}
        onClose={() => setModal({ open: false, video: "" })}
        style={styles.modal}
        maxWidth="md"
      >
        <>
          <CustomButton
            onClick={() => setModal({ open: false, video: "" })}
            variant="text"
            style={styles.modalClose}
          >
            Close
          </CustomButton>
          <iframe
            src={modal.video}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            width="60%"
            height="60%"
          />
        </>
      </Modal>
    </Container>
  );
};

const styles = {
  div: {
    width: 480,
    height: 360,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  color: {
    color: "#a99e7e",
  },
  modal: {
    backgroundColor: "rgba(29, 26, 26, 0.9)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalClose: { position: "absolute", top: 10, right: 10, color: "#fff" },
};

export default Home;
