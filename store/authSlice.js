import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem("userData")) || null,
  },
  reducers: {
    loggedUser: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    }
  }
})

// Action creators are generated for each case reducer function
export const { loggedUser } = authSlice.actions

export default authSlice.reducer