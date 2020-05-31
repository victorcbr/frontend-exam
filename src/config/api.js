/* eslint-disable no-undef */
import axios from "axios";

let baseURL =
  `${process.env.REACT_APP_YOUTUBE_LIST_URL}?` +
  `key=${process.env.REACT_APP_YOUTUBE_KEY}&` +
  `id=${process.env.REACT_APP_YOUTUBE_ID}&` +
  `part=${process.env.REACT_APP_YOUTUBE_PART}`;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getVideosByPlaylist = () =>
  api.get().then(({ data }) => {
    return data;
  });
