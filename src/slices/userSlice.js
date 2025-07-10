import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axiosInstance";

// Load user from local storage
let localUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: localUser,
  loading: false,
  error: false,
  allUsers: [], // Ensure this exists for fetch/update/delete
};

// ✅ Register User + Create Cart
export const createUser = createAsyncThunk(
  "user/createUser",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post(`/user/register`, user);
      const token = res.data.token;

      await axios.post(
        `/cart/createCart`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Registration failed"
      );
    }
  }
);

// ✅ Login User
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post(`/user/login`, user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Login failed"
      );
    }
  }
);

// ✅ Fetch All Users (Admin)
export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async ({ token }, thunkAPI) => {
    try {
      const res = await axios.get(`/user/allUser`, {
        headers: { authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to fetch users"
      );
    }
  }
);

// ✅ Update Admin Role
export const updateAdmin = createAsyncThunk(
  "user/updateAdmin",
  async ({ token, userId }, thunkAPI) => {
    try {
      const res = await axios.put(
        `/user/updateAdmin/${userId}`,
        {},
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to update admin"
      );
    }
  }
);

// ✅ Delete User
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async ({ token, userId }, thunkAPI) => {
    try {
      const res = await axios.delete(`/user/deleteUser/${userId}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Failed to delete user"
      );
    }
  }
);

// ✅ Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.user = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.user = null;
        state.loading = false;
      })

      // Fetch All Users
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.allUsers = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // Update Admin
      .addCase(updateAdmin.fulfilled, (state, action) => {
        const index = state.allUsers.findIndex(
          (user) => user._id === action.payload._id
        );
        if (index !== -1) {
          state.allUsers[index] = action.payload;
        }
      })
      .addCase(updateAdmin.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.allUsers = state.allUsers.filter(
          (user) => user._id !== action.payload._id
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
