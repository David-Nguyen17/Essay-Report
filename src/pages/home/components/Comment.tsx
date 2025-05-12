import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { IComment } from "@/redux/slices/CommentSlice";
import CommentSlice from "@/redux/slices/CommentSlice";
import { useAppDispatch } from "@/redux/store";
import { onShowToast } from "@/utils/function";
import { Trash } from "lucide-react";
export interface IProps {
  data: IComment;
}
const Comment = ({ data }: IProps) => {
  const dispatch = useAppDispatch();
  const onDeleteComment = () => {
    dispatch(CommentSlice.actions.deleteComment(data.id));
    onShowToast("Delete comment success.", { type: "success" });
  };
  return (
    <div>
      <div className="py-2 relative">
        <p className="text-gray-900 font-semibold text-sm line-clamp-6 max-w-[94%]">{data.name}</p>
        <p className="text-gray-500 mt-1 text-sm">{data.createdAt}</p>
        <Button variant={"ghost"} className="absolute right-0 top-2" onClick={onDeleteComment}>
          <Trash className="stroke-red-500" />
        </Button>
      </div>
      <Separator />
    </div>
  );
};

export default Comment;
