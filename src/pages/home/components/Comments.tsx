import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { CommentsViewModel } from "@/view-models";
import ListComments from "./ListComments";
import NoComment from "./NoComment";

const Comments = () => {
  const { form, onSubmit, comments } = CommentsViewModel({ essayId: 1 });
  return (
    <div className="my-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex items-baseline gap-2">
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea placeholder="Enter your comment" className="max-h-60" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="" disabled={!!form.formState?.errors?.comment}>
              {"Submit"}
            </Button>
          </div>
        </form>
      </Form>
      {comments?.length ? <ListComments comments={comments} /> : <NoComment />}
    </div>
  );
};

export default Comments;
