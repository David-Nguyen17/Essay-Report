import { Helmet } from "react-helmet-async";
export interface HelmetProps {
  title?: string;
}
const AppHelmet = ({ title }: HelmetProps) => {
  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>{title || "Essay System"}</title>
      </Helmet>
    </div>
  );
};

export default AppHelmet;
