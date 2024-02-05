import Image from "next/image";
import Posts from "./lib/component/Posts";
import Search from "./lib/component/Search";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12">
      <div className="flex justify-center pl-6 pr-6">
        <Image
          src="/cover.jpg"
          height={1300}
          width={1300}
          alt="cover image"
          className="rounded-lg"
          priority={true}
          placeholder="blur"
          blurDataURL="/cover.jpg"
        />
      </div>
      <Search />
      <div className="p-6">
        <p>Search results: {query}</p>
      </div>
      <div className="flex flex-col items-center justify-center p-6">
        <h2 className="pb-6 text-xl font-bold">Latest Blogs</h2>
        <div className="flex items-center justify-center">
          <Posts />
        </div>
      </div>
    </div>
  );
}
