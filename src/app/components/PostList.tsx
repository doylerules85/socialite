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
          <Link className="text-lg" href={`posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
