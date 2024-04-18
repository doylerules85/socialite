import Link from "next/link";
import { PostType } from "../types";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const filter = await data.filter((user: any) => user.userId !== 1);
  return filter;
};
const PostList = async () => {
  const posts = await getPosts();
  return (
    <ul className="divide-y-2">
      {posts.map((post: PostType) => (
        <li key={post.id} className="flex items-center gap-5 p-4">
          <img
            className="w-10 h-10 rounded-full"
            src={`https://i.pravatar.cc/150?u=${post.userId}`}
            alt="profile picture"
          />
          <div className="flex flex-col">
            <h2 className="text-lg">
              <Link
                className="focus:outline-indigo-600"
                href={`posts/${post.id}`}
              >
                {post.title}
              </Link>
            </h2>
            <span className="text-xs">Published: 4/18/2024</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
