export const replaceHtmlTag = (content: string): string => {
  return content.replace(/(\<.*?\>)|(\n)/g, "");
};
