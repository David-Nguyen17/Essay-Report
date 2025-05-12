export interface Annotation {
  start: number;
  end: number;
  text: string;
  error: string;
  suggestion: string;
  explanation: string;
}

export interface EssayItem {
  essay: string;
  id: number;
  annotations: Annotation[];
}
export type FORMAT_DATE = "DD MMM YYYY, H:mm a";
