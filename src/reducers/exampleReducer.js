/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'discussions',
  initialState: {
    appIds: [],
    status: '',
  },
  reducers: {
    selectApp: (state, { payload }) => {
      const { appId } = payload;
      state.selectedAppId = appId;
    },
    updateStatus: (state, { payload }) => {
      const { status } = payload;
      state.status = status;
    },
  },
});

export const { loadApps, selectApp, updateStatus } = slice.actions;

export const { reducer } = slice;
