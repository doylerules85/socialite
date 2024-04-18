import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { PostType, UserType } from "../../types";
import { notFound } from "next/navigation";
const ProfilePage = async ({ params }: { params: Params }) => {
  const getUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await response.json();
    return data;
  };
  const getPosts = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}/posts`
    );
    const data = await response.json();
    return data;
  };
  const user: UserType = await getUser();
  const posts: PostType[] = await getPosts();
  if (!user.id) {
    return notFound();
  }
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-4xl lg:text-6xl mb-10 font-bold text-center">
        {user.name}
      </h1>
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-32 lg:w-48 rounded-full border-4 border-indigo-500"
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={user.name}
        />
        <div className="flex flex-col gap-2 text-center my-5 lg:my-10">
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-4xl mb-5">Recent Posts</h2>
        <ul className="divide-y">
          {posts.map((post) => (
            <li className="py-2">
              <Link href={`/posts/${post.id}`} className="text-lg">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProfilePage;
