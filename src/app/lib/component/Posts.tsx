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
          <div key={data.id} className="bg-gray-100 rounded-lg mb-3 mt-3 p-10">
            <p className="text-gray-500 pb-3 pt-3">Post #{data.id}</p>
            <h2 className="font-bold text-xl text-left">{data.title}</h2>
            <p className="text-stone-500 pb-3 pt-3">
              Category: {data.category}
            </p>
            <Image
              src={data.photo_url}
              height={1300}
              width={1300}
              alt="blog preview image"
              className="rounded-lg"
            />
            <p className="text-gray-500 pt-3">{data.description}</p>
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
