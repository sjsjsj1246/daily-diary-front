import { rest } from "msw";
import { diaryList, userBookmarks } from "./data";
import auth from "../auth/data";
import qs from "qs";

export const getDiaryList: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(200),
    ctx.json(
      diaryList.diaryList.filter(
        (diary) => diary.isPublic || diary.author.id === auth.currentUser?.id
      ) || []
    )
  );
};

export const getDiary: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const { id } = req.params as { id: string };
  return res(
    ctx.status(200),
    ctx.delay(200),
    ctx.json(diaryList.diaryList.find((diary) => diary.id === parseInt(id)))
  );
};

export const updateDiary: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const { id } = req.params as { id: string };
  const index = diaryList.diaryList.findIndex(
    (diary) => diary.id === parseInt(id)
  );
  diaryList.diaryList[index] = req.body;
  return res(ctx.status(200), ctx.delay(200), ctx.json(diaryList.diaryList));
};

export const deleteDiary: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const { id } = req.params as { id: string };
  const index = diaryList.diaryList.findIndex(
    (diary) => diary.id === parseInt(id)
  );
  diaryList.diaryList.splice(index, 1);
  return res(ctx.status(200), ctx.delay(200), ctx.json(diaryList.diaryList));
};

export const bookmarkDiary: Parameters<typeof rest.get>[1] = (
  req,
  res,
  ctx
) => {
  if (!auth.currentUser) {
    return res(
      ctx.status(401),
      ctx.delay(200),
      ctx.json({ message: "로그인이 필요합니다." })
    );
  }

  const { id } = req.params as { id: string };
  const index = diaryList.diaryList.findIndex(
    (diary) => diary.id === parseInt(id)
  );

  const currentUserBookmarks = userBookmarks.find(
    (data) => data.userId === auth.currentUser!.id
  );

  if (currentUserBookmarks) {
    currentUserBookmarks.bookmarkList.push(diaryList.diaryList[index]);
  } else {
    userBookmarks.push({
      userId: auth.currentUser!.id,
      bookmarkList: [],
    });
  }

  return res(ctx.status(200), ctx.delay(200), ctx.json(diaryList.diaryList));
};

export const getBookMarkDiaryList: Parameters<typeof rest.get>[1] = (
  req,
  res,
  ctx
) => {
  const { userId } = qs.parse(req.url.search.split("?")[1]);
  console.log(userId);

  return res(
    ctx.status(200),
    ctx.delay(200),
    ctx.json(
      userBookmarks
        .find((data) => data.userId === (userId || auth.currentUser?.id))
        ?.bookmarkList.filter(
          (diary) => diary.isPublic || diary.author.id === auth.currentUser?.id
        ) || []
    )
  );
};
