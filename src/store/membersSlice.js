import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestHeaders, url } from "../api/config";

export const membersSlice = createSlice({
  name: "members",
  initialState: {
    data: [],
    loading: true,
    error: "",
  },
  reducers: {
    memberUpdated: (state, action) => {
      const data = action.payload;
      const member = state.data.find((m) => m._id === data._id);
      member.name = data.name;
      member.email = data.email;
      member.occupation = data.occupation;
      member.bio = data.bio;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
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
    console.log(error);
  }
});
