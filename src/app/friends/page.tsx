import Link from "next/link";
import { FriendType } from "../types";

const getFriends = async () => {
  // here if using a database - I would have a relationship of "Friends" that the user has. Possibly a Follows Table
  // user_id <---> following_user_id
  // then populate the users based on the following
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const filter = await data.filter((user: any) => user.id !== 1);
  return filter;
};

const FriendsPage = async () => {
  const friends = await getFriends();
  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-3xl lg:text-6xl font-bold mb-5">Friends</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {friends.map((friend: FriendType) => (
          <li key={friend.id}>
            <Link
              href={`/user/${friend.id}`}
              className="flex flex-col items-center gap-4"
            >
              <img
                className="w-20 lg:w-32 rounded-full"
                src={`https://i.pravatar.cc/150?u=${friend.id}`}
                alt={friend.name}
              />
              <h2 className="text-xl lg:text-2xl">{friend.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FriendsPage;
