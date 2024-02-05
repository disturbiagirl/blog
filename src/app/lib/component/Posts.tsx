"use client";
import Image from "next/image";
import { fetchPosts } from "../data";
import Link from "next/link";

const Posts = async () => {
  const data = await fetchPosts();
  return (
    <div className="flex flex-col items-center justify-center">
      {data.map((data: any) => {
        return (
          <div key={data.id} className="p-10 mt-3 mb-3 bg-gray-100 rounded-lg">
            <p className="pt-3 pb-3 text-gray-500">Post #{data.id}</p>
            <h2 className="text-xl font-bold text-left">{data.title}</h2>
            <p className="pt-3 pb-3 text-stone-500">
              Category: {data.category}
            </p>
            <Image
              src={data.photo_url}
              height={1300}
              width={1300}
              alt="blog preview image"
              className="rounded-lg"
            />
            <p className="pt-3 text-gray-500">{data.description}</p>
            <Link href={`/${data.id}`} className=" hover:text-sky-700">
              read more...
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
