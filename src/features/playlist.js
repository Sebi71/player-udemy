import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  play: false,
  songs: null,
  currentSongID: null,
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    baseSongs: (state, action) => {
      state.songs = action.payload;
      state.currentSongID = action.payload[0].id;
    },
    togglePlay: (state, action) => {
      state.play = !state.play;
    },
    nextSong: (state, action) => {
      if (action.payload === state.songs.length) {
        state.currentSongID = state.songs[0].id;
      } else {
        state.currentSongID = state.songs[action.payload].id;
      }
    },
    previousSong: (state, action) => {
      if (action.payload < 0) {
        state.currentSongID = state.songs[state.songs.length - 1].id;
      } else {
        state.currentSongID = state.songs[action.payload].id;
      }
    },
    changeSong: (state, action) => {
      state.currentSongID = action.payload;
    }
  },
});

export const { 
    baseSongs, 
    togglePlay, 
    nextSong, 
    previousSong,
    changeSong 
} = playlistSlice.actions;
export default playlistSlice.reducer;
