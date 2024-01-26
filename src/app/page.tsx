import Image from "next/image";
import Post from "./lib/component/Post";

export default function Home() {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <div className="flex justify-center pl-6 pr-6">
        <Image src="/cover.jpg" height={1000} width={1000} alt="cover image" />
      </div>
      <div className="flex flex-col items-center justify-center p-6">
        <h2 className="font-bold text-xl">Latest Blogs</h2>
        <Post />
      </div>
    </div>
  );
}
