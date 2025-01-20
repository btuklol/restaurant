import HeroComp from "./Components/HeroComp";
import HeroText from "./Components/HeroText";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center border ">
      <div className="absolute top-0 left-0 mx-auto w-full h-screen flex justify-center flex-wrap items-center z-10">
        <HeroComp />
        <HeroText title="BESTALLA" fontSize="text-[144px]" bgColor="bg-black" />
        <HeroText
          title="KONTAKT OSS"
          fontSize="text-[155px]"
          bgColor="bg-green-900"
        />
        <HeroText title="MENU" fontSize="text-[165px]" bgColor="bg-red-800" />
      </div>
      <video
        className="absolute w-screen h-screen object-cover"
        autoPlay
        muted
        loop 
        src="/sushi.mp4"
      />
    </div>
  );
}
