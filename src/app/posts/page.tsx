import PostList from "../components/PostList";
import { Suspense } from "react";

const PostsPage = async () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-4xl lg:text-6xl mb-5 font-bold">Recent Posts</h1>
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <h2 className="bg-indigo-600 text-white p-3 rounded-lg">
              Loading...
            </h2>
          </div>
        }
      >
        <PostList />
      </Suspense>
    </section>
  );
};

export default PostsPage;
