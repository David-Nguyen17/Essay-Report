import AppHelmet from "@/components/helmet";
import { DATA } from "@/utils/constant";
import EssayCard from "./components/EssayCard";

const HomePage = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <AppHelmet title="Essay Report" />
      <h1 className="text-center my-4 font-bold text-2xl">Essay + Annotations View Design</h1>
      <div className="text-black font-bold my-8 text-2xl">Version 1</div>
      <div className="max-w-[70%]">
        {DATA.map((data) => {
          return <EssayCard data={data} key={data?.id} />;
        })}
      </div>
      <div className="text-black font-bold my-8 text-2xl">Version 2</div>
      <div className="max-w-[70%]">
        {DATA.map((data) => {
          return <EssayCard className="leading-loose" data={data} key={data?.id} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
