import { createSlice } from "@reduxjs/toolkit";

const row = {
  index: 0,
  year: null,
  month: null,
  times: [{
    stime: null,
    etime: null
  }]
};

// Stateの初期状態
const initialState = {
  dutyTimes: []
};

// Sliceを生成する
const slice = createSlice({
  name: "dutytimes",
  initialState,
  reducers: {
    setTime(state, action) {
      const { year, month, day, stime, etime } = action.payload;
      const row = state.dutyTimes.find(time => {
        return `${time.year}` === `${year}`
          && `${time.month}` === `${month}`;
      });
      const monthIndex = row.index;
      const dayIndex = +day - 1;
      state.dutyTimes[monthIndex].times[dayIndex].stime = stime;
      state.dutyTimes[monthIndex].times[dayIndex].etime = etime;
    }
    // etc...
  }
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setTime } = slice.actions;
