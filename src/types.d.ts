type User = {
  id: string;
  name: string | null;
  email: string;
};

type Diary = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  isPublic: boolean;
  tags: Array<string>;
  image: string | null;
  author: User;
};
