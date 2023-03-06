import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId:null,
    channelName:null
  },

  reducers: {
    setChannelId: (state, action) => {

      state.app += action.payload;
    },
  },
  
});

export const { setChannelId, login } = appSlice.actions;


export const selectChannelId = (state) => state.app.channelID;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
