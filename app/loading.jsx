"use client";
import { ColorRing } from "react-loader-spinner";

function Loading() {
  return (
    <div className="text-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{ margin: "0 auto" }}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      <p>کمی صبر کنید 😁</p>
    </div>
  );
}

export default Loading;
