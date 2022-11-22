export default {
  count: 2 as number,
  diaryList: [
    {
      id: 1,
      title: "11.21 일기",
      content: "첫번째 일기이다",
      createdAt: "2022-11-21T00:00:00.000Z",
      isPublic: true,
      tags: ["일기", "일상"],
      image: null,
      author: {
        id: "adawdaw",
        name: "황인서",
        email: "sjsjsj1246@gmail.com",
      },
    },
    {
      id: 2,
      title: "11.22 일기",
      content: "두번째 일기이다. 마라탕 먹고싶다",
      createdAt: "2022-11-22T00:00:00.000Z",
      isPublic: true,
      tags: ["일기", "일상"],
      image: null,
      author: {
        id: "adawdaw",
        name: "황인서",
        email: "sjsjsj1246@gmail.com",
      } as User,
    },
  ] as Diary[],
};
