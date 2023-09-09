import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-around justify-items-center">
      <h1>head</h1>
      <div>
        <button
          type="button"
          className="h-14 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
        >
          Hover me
        </button>
      </div>
      <Image
        src={"/img/logo.png"}
        width={200}
        height={200}
        alt="lssi it logo"
        className="rounded"
      />
    </div>
  );
};

export default Header;
