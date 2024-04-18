import { PostType } from "@/app/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { notFound } from "next/navigation";

const PostPage = async ({ params }: { params: Params }) => {
  const getPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const data = await response.json();
    return data;
  };
  const post: PostType = await getPost();

  if (!post.id) {
    return notFound();
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-10">
        <Link
          href="/posts"
          className="underline decoration-2 decoration-indigo-500 underline-offset-2 hover:no-underline focus:outline-indigo-600"
        >
          Back to Posts
        </Link>
      </div>
      <div className="mb-10 flex items-center gap-5 lg:gap-10">
        <img
          className="w-20 rounded-full"
          src={`https://i.pravatar.cc/150?u=${post.userId}`}
          alt="post user"
        />
        <div>
          <p>By: Post User</p>
          <p>Published: 4/18/2024</p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl/normal lg:text-6xl/normal mb-10 font-bold">
          {post.title}
        </h1>
        <p>{post.body}</p>
      </div>
    </section>
  );
};

export default PostPage;
