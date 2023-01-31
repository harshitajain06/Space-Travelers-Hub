import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const GET_MISSION = "reactGroupProject/missions/GET_MISSION";

const URL = "https://api.spacexdata.com/v3/missions";

export const getMission = createAsyncThunk(GET_MISSION, async () => {
  const response = await axios.get(URL);
  if (response.data) {
    return response.data;
  }
  return [];
});

// function fetchMission() {
//   axios({
//     method: "get",
//     url: URL,
//   }).then((res) => console.log(res.data));
// }

// fetchMission();

const missionArr = [];
const missionSlice = createSlice({
  name: "missions",
  initialState: missionArr,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMission.fulfilled, (state, action) => {
      const newMissions = state;
      Object.entries(action.payload).forEach((mission) => {
        newMissions.push({
          mission_id: mission[1].mission_id,
          mission_name: mission[1].mission_name,
          description: mission[1].description,
        });
      });
      return newMissions;
    });
  },
});

export default missionSlice.reducer;
