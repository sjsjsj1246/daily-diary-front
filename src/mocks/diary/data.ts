export const diaryList = {
  count: 2 as number,
  diaryList: [
    {
      id: 1,
      title: "1월 1일 일기",
      content: "첫번째 일기이다",
      createdAt: "2022-01-01T00:00:00.000Z",
      isPublic: true,
      bookmarkedUserId: [],
      tags: ["일기", "일상"],
      image: null,
      author: {
        id: "b",
        name: "조재영",
        email: "sjsjsj1246@gmail.com",
      },
    },
    {
      id: 2,
      title: "11.22 일기",
      content: "두번째 일기이다. 마라탕 먹고싶다",
      createdAt: "2022-11-22T00:00:00.000Z",
      isPublic: true,
      image: null,
      bookmarkedUserId: ["a"],
      tags: ["일기", "일상"],
      author: {
        id: "a",
        name: "황인서",
        email: "sjsjsj1246@gmail.com",
      } as User,
    },
    {
      id: 3,
      title: "11.30 일기",
      content: "세번째 일기이다. 마라탕 먹고싶다 이건 비밀이다",
      createdAt: "2022-11-30T00:00:00.000Z",
      isPublic: false,
      image: null,
      bookmarkedUserId: ["a"],
      tags: ["일기", "일상"],
      author: {
        id: "a",
        name: "황인서",
        email: "sjsjsj1246@gmail.com",
      } as User,
    },
    {
      id: 4,
      title: "11월 30일 일기",
      content: "비밀 일기이다",
      createdAt: "2022-01-01T00:00:00.000Z",
      isPublic: false,
      bookmarkedUserId: [],
      tags: ["일기", "일상"],
      image: null,
      author: {
        id: "b",
        name: "조재영",
        email: "sjsjsj1246@gmail.com",
      },
    },
  ] as Diary[],
};

export const userBookmarks = [
  {
    userId: "a",
    bookmarkList: [
      {
        id: 2,
        title: "11.22 일기",
        content: "두번째 일기이다. 마라탕 먹고싶다",
        createdAt: "2022-11-22T00:00:00.000Z",
        isPublic: true,
        tags: ["일기", "일상"],
        image: null,
        author: {
          id: "a",
          name: "황인서",
          email: "sjsjsj1246@gmail.com",
        } as User,
      },
      {
        id: 3,
        title: "11.30 일기",
        content: "세번째 일기이다. 마라탕 먹고싶다 이건 비밀이다",
        createdAt: "2022-11-30T00:00:00.000Z",
        isPublic: false,
        image: null,
        bookmarkedUserId: ["a"],
        tags: ["일기", "일상"],
        author: {
          id: "a",
          name: "황인서",
          email: "sjsjsj1246@gmail.com",
        } as User,
      },
    ] as Diary[],
  },
];
