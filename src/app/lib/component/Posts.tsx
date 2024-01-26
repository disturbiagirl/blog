const Posts = async () => {
  try {
    const res = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts/1`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    console.log(data.blog.title);
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <h2 className="font-bold text-xl">{data.blog.title}</h2>
        <p className="text-gray-500 pt-3">{data.blog.content_text}</p>
      </div>
    );
  } catch (err) {
    console.log(err);
  }
};

export default Posts;
