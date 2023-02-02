import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_MISSION = 'reactGroupProject/missions/GET_MISSION';

const URL = 'https://api.spacexdata.com/v3/missions';

export const getMission = createAsyncThunk(GET_MISSION, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  if (data) {
    return data;
  }
  return [];
});

const missionArr = [];
const missionSlice = createSlice({
  name: 'missions',
  initialState: missionArr,
  reducers: {
    joinMission(state, action) {
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return { ...mission };
        }

        return { ...mission, reserved: true, status: 'Active member' };
      });
    },
    leaveMission(state, action) {
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return { ...mission };
        }

        return { ...mission, reserved: false, status: 'Not a member' };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMission.fulfilled, (state, action) => {
      const newMissions = state;
      Object.entries(action.payload).forEach((mission) => {
        newMissions.push({
          mission_id: mission[1].mission_id,
          mission_name: mission[1].mission_name,
          description: mission[1].description,
          status: 'Not a memmber',
          reserved: false,
        });
      });
      return newMissions;
    });
  },
});

export default missionSlice.reducer;
export const { joinMission, leaveMission } = missionSlice.actions;
