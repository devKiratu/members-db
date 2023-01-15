import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { requestHeaders, url } from "../api/config";
import { loadState, updateLocalStorage } from "./localStorage";

export const membersSlice = createSlice({
  name: "members",
  initialState: loadState() ?? {
    data: [],
    loading: true,
  },
  reducers: {
    memberUpdated: (state, action) => {
      const data = action.payload;
      const member = state.data.find((m) => m._id === data._id);
      member.name = data.name;
      member.email = data.email;
      member.occupation = data.occupation;
      member.bio = data.bio;
      updateLocalStorage(current(state));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        updateLocalStorage(current(state));
      });
  },
});

export const { memberUpdated } = membersSlice.actions;

export default membersSlice.reducer;

export const getMemberByIdSelector = (state, id) =>
  state.members.data.find((m) => m._id === id);

export const fetchData = createAsyncThunk("members/fetchData", async () => {
  try {
    const response = await fetch(url, requestHeaders);
    const data = await response.json();
    return data;
  } catch (error) {
    toast("Error fetching data", { type: "error" });
  }
});
