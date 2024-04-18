import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 gap-10">
      <h1 className="text-4xl font-bold">User Not Found.</h1>
      <Link
        href="/friends"
        className="underline decoration-2 decoration-indigo-500 underline-offset-2 hover:no-underline"
      >
        Back to friends
      </Link>
    </div>
  );
};

export default NotFound;
