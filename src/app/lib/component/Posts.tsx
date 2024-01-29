"use client";
import Image from "next/image";
import Button from "./Button";
import { PostProps } from "../types";
import { fetchPosts } from "../data";

const Posts = async () => {
  const data = await fetchPosts();
  console.log(data);
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
            <p id="content" className="text-gray-500 pt-3 hidden">
              {data.content_text}
            </p>
            <Button />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

{
  /* <div key={item.id} className="bg-gray-100 rounded-lg mb-3 mt-3 p-10">
<p className="text-gray-500 pb-3 pt-3">Post #{data.blogs[i].id}</p>
<h2 className="font-bold text-xl text-left">
  {data.blogs[item.i].title}
</h2>
<p className="text-stone-500 pb-3 pt-3">
  Category: {data.blogs[i].category}
</p>
<Image
  src={data.blogs[i].photo_url}
  height={1300}
  width={1300}
  alt="blog preview image"
  className="rounded-lg"
/>
<p className="text-gray-500 pt-3">{data.blogs[i].description}</p>
<p id="content" className="text-gray-500 pt-3 hidden">
  {data.blogs[i].content_text}
</p>
<Button />
</div> */
}
