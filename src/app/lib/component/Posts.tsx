import { Key } from "react";
import Image from "next/image";

const Posts = async () => {
  try {
    const res = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10`,
      {
        method: "GET",
      }
    );
    const data = await res.json();

    return (
      <div className="flex flex-col items-center justify-center">
        {data &&
          data.blogs.map((item: any, i: number) => (
            <div key={i} className="bg-gray-100 rounded-lg m-3 p-10">
              <h2 className="font-bold text-l text-center">
                {data.blogs[i].title}
              </h2>
              <Image
                src={data.blogs[i].photo_url}
                height={1000}
                width={1000}
                alt="blog preview image"
              />
              <p className="text-gray-500 pt-3">{data.blogs[i].content_text}</p>
            </div>
          ))}
      </div>
    );
  } catch (err) {
    console.log(err);
  }
};

export default Posts;
