import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const UserPage = ({ params }: { params: Params }) => {
  return <div>User: {params.id}</div>;
};

export default UserPage;
