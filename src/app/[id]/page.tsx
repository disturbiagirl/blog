import { fetchPost, fetchAuthor } from "../lib/data";
import Image from "next/image";
import Link from "next/link";

const Post = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const post = await fetchPost(id);
  const author = await fetchAuthor(id);

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <div key={post.id} className="bg-gray-100 rounded-lg mb-3 mt-3 p-10">
        <p className="text-gray-500 pb-3 pt-3">Post #{post.id}</p>
        <h2 className="font-bold text-xl text-left">{post.title}</h2>
        <p className="text-stone-500 pb-3 pt-3">Category: {post.category}</p>
        <Image
          src={post.photo_url}
          height={1300}
          width={1300}
          alt="blog preview image"
          className="rounded-lg"
          priority={true}
        />
        <p id="content" className="text-gray-500 pt-3">
          {post.content_text}
        </p>
        <p className="text-gray-500 pt-3 pb-3">
          Created by: {author.first_name + " " + author.last_name} on{" "}
          {post.created_at.split("T")[0]}
        </p>
        <Image
          src={author.profile_picture}
          height={100}
          width={100}
          alt="author photo"
          className="rounded-full"
        />
        <div className="pt-5">
          <Link href="/" className=" hover:text-sky-700">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
