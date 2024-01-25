import Image from "next/image";

export default function Home() {
  return (
    <main className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 pb-9">
        <h1 className="font-bold text-5xl">Blogtopia.</h1>
        <p className="text-gray-500 pt-3">
          your go to place for the most interesting blogs sourced from around
          the world
        </p>
      </nav>
      <div className="flex justify-center pl-6 pr-6">
        <Image src="/cover.jpg" height={1000} width={1000} alt="cover image" />
      </div>
      <div className="flex justify-center p-6">
        <h2 className="font-bold text-xl">Latest Blogs</h2>
      </div>
    </main>
  );
}
