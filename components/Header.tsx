import Image from "next/image";
import { GrLogin } from "react-icons/gr";

const Header = () => {
  return (
    <div className="Header flex justify-around justify-items-center">
      <Image
        src={
          "/img/lssi-high-resolution-logo-color-on-transparent-background.webp"
        }
        width={200}
        height={200}
        alt="lssi it logo"
        className="rounded drop-shadow-sm shadow py-3 hover:cursor-pointer hover:drop-shadow-md hover:shadow-transparent"
      />
      <div className="inline-flex justify-between">
        <button className="ticket-btn">ارسال تیکت</button>
        <div className="mt-16 pl-16 hover:cursor-pointer">
          <GrLogin style={{ fontSize: "30px", color: "#487gv" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
