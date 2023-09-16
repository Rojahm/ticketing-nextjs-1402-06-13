"use client";
import Image from "next/image";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUserAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="Header">
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
        <div className="user">
          <Link href={"/ticketing/create"} className="ticket-btn shadow">
            ارسال تیکت
            <FaQuestionCircle />
          </Link>
          <div className="user-menu">
            <Link href={"/login"}>
              <FaSignInAlt className={"icon shadow"} />
            </Link>
            {/* <FaSignOutAlt className={"icon shadow"} />
            <FaUserAlt className={"icon shadow"} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
