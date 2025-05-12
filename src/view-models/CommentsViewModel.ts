import CommentSlice from "@/redux/slices/CommentSlice";
import { useAppDispatch, useAppSelector, type RootState } from "@/redux/store";
import { formatDate, onShowToast } from "@/utils/function";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  comment: z
    .string()
    .min(1, { message: "Please enter your comment." })
    .max(1000, { message: "Comment must be 500 characters or less." }),
});
const CommentsViewModel = ({ essayId }: { essayId: number }) => {
  const { comments } = useAppSelector((state: RootState) => state["feature/comments"]);
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      comment: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    dispatch(
      CommentSlice.actions.addComment({
        createdAt: formatDate(dayjs(), "DD MMM YYYY, H:mm a"),
        essayId,
        name: data.comment,
        id: comments.length + 1,
      }),
    );
    onShowToast("Add comment success.", { type: "success" });
    form.reset();
  }
  return {
    comments,
    form,
    onSubmit,
  };
};

export default CommentsViewModel;
