type User = {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
};

type AuthDTO = {
  accessToken: string;
  refreshToken: string;
  memberId: string;
  name: string;
  profileImage: string;
  email: string;
};

type Diary = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  isPublic: boolean;
  bookmarkedUserId: Array<string>;
  tags: Array<string>;
  image: string | null;
  author: User;
};

type WriteDiary = {
  id: number | null;
  title: string;
  content: string;
  isPublic: boolean;
  tags: Array<string>;
  image: string | null;
};

type DiaryQuery = {
  userId?: string;
};
