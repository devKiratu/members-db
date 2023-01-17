import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { requestHeaders, baseUrl } from "../api/config";
import { loadState, updateLocalStorage } from "./localStorage";

const defaultState = {
  data: [],
  loading: true,
  error: "",
};

export const membersSlice = createSlice({
  name: "members",
  initialState: loadState() ?? defaultState,
  reducers: {
    memberUpdated: (state, action) => {
      const data = action.payload;
      const member = state.data.find((m) => m.id === data.id);
      member.name = data.name;
      member.email = data.email;
      member.occupation = data.occupation;
      member.bio = data.bio;
      updateLocalStorage(state);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state = defaultState;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
        toast(action.error.message, { type: "error" });
        updateLocalStorage(state);
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data = action.payload;
        updateLocalStorage(state);
      });
  },
});

export const { memberUpdated } = membersSlice.actions;

export default membersSlice.reducer;

export const getMemberByIdSelector = (state, id) =>
  state.members.data.find((m) => m.id === id);

export const fetchData = createAsyncThunk("members/fetchData", async () => {
  const response = await fetch(`${baseUrl}/users`, requestHeaders);
  const data = await response.json();
  return data;
});
