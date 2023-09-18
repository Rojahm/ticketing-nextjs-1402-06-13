import Image from "next/image";
import { FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="Header">
      <Link href={"/ticketing/create"} className="ticket-btn shadow">
        <FaQuestionCircle />
        ارسال تیکت
      </Link>
      <Link href={"/"}>
        <Image
          priority={true}
          src={
            "/img/lssi-high-resolution-logo-color-on-transparent-background.webp"
          }
          width={140}
          height={140}
          alt="lssi it logo"
          className="rounded p-3 drop-shadow-sm shadow py-3 hover:cursor-pointer hover:drop-shadow-md hover:shadow-transparent"
        />
      </Link>
    </div>
  );
};

export default Header;
