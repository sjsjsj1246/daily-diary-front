type User = {
  id: string;
  name: string | null;
  email: string;
  profileImage: string | null;
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
  diaryId: number;
  title: string;
  contents: string;
  createdAt: string;
  bookmarkedUserId: Array<string>;
  tags: Array<string>;
  image: string | null;
  isPublic: boolean;
  author: {
    id: string;
    name: string;
    image: string | null;
  };
};

type WriteDiary = {
  id: number | null;
  title: string;
  contents: string;
  isPublic: boolean;
  tags: Array<string>;
  image: any;
};

type DiaryQuery = {
  sort: "ASC" | "DESC";
  limit: number;
  lte: number;
};
