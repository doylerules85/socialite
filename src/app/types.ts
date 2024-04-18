export type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
  // nice to haves
  updated_at: string;
  created_at: string;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type FriendType = {
  id: number;
  name: string;
  username: string;
  // could be used to tell the user when they became friends
  created_at: string;
};
