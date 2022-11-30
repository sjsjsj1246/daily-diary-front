type User = {
  id: string;
  name: string | null;
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

type DiaryQuery = {
  userId?: string;
};
