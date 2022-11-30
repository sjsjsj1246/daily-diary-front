type DiaryProps = {
  diary: Diary;
};

const Diary: React.FC<DiaryProps> = ({ diary }) => {
  return <div>{diary.title}</div>;
};

export default Diary;
