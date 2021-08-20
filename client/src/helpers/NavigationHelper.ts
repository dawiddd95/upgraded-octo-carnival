export const buildLink = (url: string, params: { key: string; value: any }[]) => {
  let parsedUrl = url;

  params.forEach(({ key, value }) => {
    parsedUrl = parsedUrl.replace(key, value);
  });

  return parsedUrl;
};
