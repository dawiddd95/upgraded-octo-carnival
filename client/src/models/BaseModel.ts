export interface IBaseModelDTO {
  id: number;
}

export interface IBaseModel {
  id: number;
}

class BaseModel implements IBaseModel {
  constructor(public id: number) {}

  static buildFetchUrl({
    url,
    id,
    params
  }: {
    url: string;
    params?: { key: string; value: any }[];
    id?: number | string;
  }): string {
    let parsedUrl = url;

    if (id) {
      parsedUrl = `${parsedUrl}/${id}`;
    } else if (params) {
      params.forEach(({ key, value }) => {
        parsedUrl = parsedUrl.replace(key, value);
      });
    }

    return parsedUrl;
  }
}

export default BaseModel;
