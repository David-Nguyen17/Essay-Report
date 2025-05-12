import { cn } from "@/lib/utils";

export interface IProps {
  title?: string;
  content?: string;
  className?: string;
}
const Box = ({ title, content, className }: IProps) => {
  return (
    <div className={cn("border border-green-700 rounded-md px-3 py-2 mt-4", className)}>
      <p className="font-bold text-base">{title || "Conrrection"}</p>
      <p className="font-normal text-sm mt-0.5">{content}</p>
    </div>
  );
};

export default Box;
