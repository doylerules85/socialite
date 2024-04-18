import { Suspense } from "react";
import FriendList from "./FriendList";

const FriendsPage = async () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-3xl lg:text-6xl font-bold mb-5">Friends</h1>
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <h2 className="bg-indigo-600 text-white p-3 rounded-lg">
              Loading...
            </h2>
          </div>
        }
      >
        <FriendList />
      </Suspense>
    </section>
  );
};

export default FriendsPage;
