import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  unsavedChanges: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = { id: Date.now(), ...action.payload };
      state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.users));
      state.unsavedChanges = false;
    },
    updateUser: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.users.findIndex(user => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updates };
        localStorage.setItem("users", JSON.stringify(state.users));
        state.unsavedChanges = true;
      }
    },
    setUnsavedChanges: (state, action) => {
      state.unsavedChanges = action.payload;
    },
    saveUserData: (state) => {
      localStorage.setItem("users", JSON.stringify(state.users));
      state.unsavedChanges = false;
    },
  },
});

export const { addUser, updateUser, setUnsavedChanges, saveUserData } = userSlice.actions;
export default userSlice.reducer;
