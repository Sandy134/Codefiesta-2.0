// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "./authService";
// // Get user from localstorage

// const initialState = {
//   user: null
// };

// // Register User
// export const register = createAsyncThunk(
//   "user/register",
//   async (user, thunkAPI) => {
//     try {
//       return await authService.register(user);
//     } catch (error) {
//       const message =
//         (error.message && error.response.data && error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//       state.isError = false;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.user = null;
//       });
//   },
// });

// export const { reset } = userSlice.actions;

// export default userSlice.reducer;
