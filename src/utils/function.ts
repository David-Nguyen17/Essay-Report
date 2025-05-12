import type { Annotation, FORMAT_DATE } from "@/types/data";
import dayjs, { Dayjs } from "dayjs";
import { toast, type ToastOptions } from "react-toastify";
export const handleConvertSegmanet = (essay: string, sortedAnnotations: Annotation[]) => {
  const segments = [];
  let lastIndex = 0;
  for (let i = 0; i < sortedAnnotations.length; i++) {
    const { start, end, error, suggestion, explanation } = sortedAnnotations[i];
    if (lastIndex < start) {
      segments.push({
        text: essay.slice(lastIndex, start),
        highlighted: false,
      });
    }
    segments.push({
      text: essay.slice(start, end),
      highlighted: true,
      explanation,
      error,
      suggestion,
    });
    lastIndex = end;
  }
  if (lastIndex < essay.length) {
    segments.push({
      text: essay.slice(lastIndex),
      highlighted: false,
    });
  }
  return segments;
};

export const formatDate = (date?: Dayjs, type: FORMAT_DATE = "DD MMM YYYY, H:mm a") => {
  if (!date) return "";
  return dayjs(date).format(type);
};

export const onShowToast = (message: string, options?: ToastOptions) => {
  const toastTypeClasses: Record<string, string> = {
    info: "bg-blue-50 text-blue-800 border-l-4 border-blue-500 text-xs",
    success: "bg-green-50 text-green-800 border-l-4 border-green-500 text-xs",
    warning: "bg-yellow-50 text-yellow-800 border-l-4 border-yellow-500 text-xs",
    error: "bg-red-50 text-red-800 border-l-4 border-red-500 text-xs",
    default: "bg-white text-gray-800 border-l-4 border-gray-300 text-xs",
  };
  return toast(message || "Wow so easy !", {
    autoClose: 6000,
    type: "success",
    hideProgressBar: true,
    className: toastTypeClasses[options?.type || "default"],
    position: "top-center",
    toastId: "toastId",
    ...options,
  });
};
