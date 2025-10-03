import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch posts with pagination
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts", 
  async (page = 1) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return { data, page };
  }
);

// Fetch one post + comments
export const fetchPostDetail = createAsyncThunk(
  "posts/fetchPostDetail",
  async (id) => {
    const postRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await postRes.json();

    const commentsRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const comments = await commentsRes.json();

    return { post, comments };
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    page: 1,
    perPage: 10,
    total: 0,
    loading: false,
    error: null,
    detail: null,
    comments: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data;
        state.page = action.payload.page;
        state.total = action.payload.data.length;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPostDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload.post;
        state.comments = action.payload.comments;
      })
      .addCase(fetchPostDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
