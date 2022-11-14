import Image from "next/image";
import placeholder from "../public/assets/projects/placeholder.png";

const VinylVault = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] md:h-[40vh] relative">
        <div className="absolute top-0 w-full h-[30vh] md:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute z-1" layout="fill" objectFit="cover" src={placeholder} />
      </div>
    </div>
  );
};

export default VinylVault;
