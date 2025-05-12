import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Separator } from "../ui/separator";
export interface IProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  classNameContent?: string;
  trigger?: string;
}
const AppDialog = ({ className, title, children, trigger, classNameContent }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger className={cn(className)}>{trigger}</DialogTrigger>
      <DialogContent className={classNameContent}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <Separator />
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;
