"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { PostProps } from "../types";

const Posts = async () => {
  try {
    const res = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10`,
      {
        method: "GET",
      }
    );
    const data: PostProps = await res.json();
    // console.log(Button.value);
    return (
      <div className="flex flex-col items-center justify-center">
        {data &&
          data.blogs.map((item: any, i: number) => (
            <div key={i} className="bg-gray-100 rounded-lg mb-3 mt-3 p-10">
              <h2 className="font-bold text-xl text-left">
                {data.blogs[i].title}
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
            </div>
          ))}
      </div>
    );
  } catch (err) {
    console.log(err);
  }
};

export default Posts;
