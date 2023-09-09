import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-around justify-items-center">
      <div className="inline-flex justify-between">
        <button className="rounded-full h-10 px-5 hover:border hover:shadow hover:border-orange-400 active:border-2">
          login
        </button>
        <button>ارسال تیکت</button>
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
