import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IComment {
  id: number;
  name: string;
  essayId: number;
  createdAt: string;
}
export interface CommentProps {
  comments: IComment[];
}
const initialState: CommentProps = {
  comments: [],
};

const CommentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    addComment: (state, action: PayloadAction<IComment>) => {
      state.comments = [...state.comments, action.payload];
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter((comment) => comment?.id !== action.payload);
    },
  },
});
export default CommentSlice;
