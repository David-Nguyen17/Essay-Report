import { cn } from "@/lib/utils";
import type React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
export interface IProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  classNameContent?: string;
}
const AppToolTop = ({ className, title, children, classNameContent }: IProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={cn(className)}>{title}</TooltipTrigger>
        <TooltipContent className={cn("bg-white", classNameContent)}>{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AppToolTop;
