import Image from "next/image";
import { GrLogin } from "react-icons/gr";

const Header = () => {
  return (
    <div className="flex justify-around justify-items-center">
      <div className="inline-flex justify-between">
        <div className="mt-16 pr-16 hover:cursor-pointer">
          <GrLogin style={{ fontSize: "30px", color: "#487gv" }} />
        </div>
        <button className="text-lg text-white rounded-full bg-yellow-500 w-64 h-10 px-5 hover:shadow hover:border-orange-400 active:border-2 mt-14">
          ارسال تیکت
        </button>
      </div>
      <Image
        src={
          "/img/lssi-high-resolution-logo-color-on-transparent-background.webp"
        }
        width={200}
        height={200}
        alt="lssi it logo"
        className="rounded drop-shadow-sm shadow py-3 hover:cursor-pointer hover:drop-shadow-md hover:shadow-transparent"
      />
    </div>
  );
};

export default Header;
