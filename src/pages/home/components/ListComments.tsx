import type { IComment } from "@/redux/slices/CommentSlice";
import Comment from "./Comment";

const ListComments = ({ comments }: { comments: IComment[] }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
      <div className="text-center my-2 text-gray-900 font-medium">We need implement pagination if list large</div>
    </div>
  );
};

export default ListComments;
