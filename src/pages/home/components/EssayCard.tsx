import AppDialog from "@/components/app-dialog";
import { cn } from "@/lib/utils";
import type { EssayItem } from "@/types/data";
import { handleConvertSegmanet } from "@/utils/function";
import { useState } from "react";
import Box from "./Box";
import Comments from "./Comments";

interface IProps {
  data: EssayItem;
  className?: string;
}
const EssayCard = ({ data: { annotations, essay }, className }: IProps) => {
  const [segments] = useState(
    handleConvertSegmanet(
      essay,
      annotations.sort((a, b) => a.start - b.start),
    ),
  );
  return (
    <div>
      <div className={cn("whitespace-pre-wrap leading-snug text-base text-gray-600", className)}>
        {segments.map((seg, index) =>
          seg.highlighted ? (
            <AppDialog
              key={index}
              classNameContent="border border-gray-200 max-h-[80%] overflow-auto"
              className="relative group cursor-pointer font-medium border border-red-500 text-gray-900 bg-red-200 px-2 py-0 rounded-sm"
              title={"Word choice"}
              trigger={seg.text}
            >
              <div className="text-gray-800 text-sm rounded">
                <div className="my-1">
                  <p className="font-bold text-base">Explaintion</p>
                  <p className="mt-1 text-gray-600 text-sm">{seg.explanation}</p>
                </div>
                <Box title="Actual Writing" className="border-red-700 mt-6" content={seg.text} />
                <Box title="Conrrection" className="border-green-700 mt-4" content={seg.suggestion} />
              </div>
            </AppDialog>
          ) : (
            <span key={index}>{seg.text}</span>
          ),
        )}
      </div>
      <Comments />
    </div>
  );
};

export default EssayCard;
