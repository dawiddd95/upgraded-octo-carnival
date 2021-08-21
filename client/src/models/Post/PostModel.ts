import BaseModel, { IBaseModel, IBaseModelDTO } from '@models/BaseModel';
import { AxiosRequestConfig } from 'axios';
import { IHttpResponse, IHttpResponseList } from '@interfaces/HttpInterface';
import { apiRequest } from '@services/ApiService';
import { IPostFormModelDTO } from '@models/Post/PostFormModel';

const apiUrl = '/posts';

export interface IPostModelDTO extends IBaseModelDTO {
  userId: number;
  title: string;
  body: string;
}

export interface IPostModel extends IBaseModel {
  userId: number;
  title: string;
  body: string;

  serialize: () => IPostModelDTO;
}

class PostModel extends BaseModel implements IPostModel {
  constructor(public id: number, public userId: number, public title: string, public body: string) {
    super(id);
  }

  serialize = () => ({
    id: this.id,
    userId: this.userId,
    title: this.title,
    body: this.body
  });

  static build = (dto: IPostModelDTO): IPostModel => new PostModel(dto.id, dto.userId, dto.title, dto.body);

  static fetchPostList = (config: AxiosRequestConfig = {}): Promise<IHttpResponseList<IPostModelDTO>> =>
    apiRequest.get(apiUrl, config);

  static fetchPost = (id: string, config: AxiosRequestConfig = {}): Promise<IHttpResponse<IPostModelDTO>> =>
    apiRequest.get(PostModel.buildFetchUrl({ url: apiUrl, id }), config);

  static createPost = (values: IPostFormModelDTO): Promise<IHttpResponse<IPostModelDTO>> =>
    apiRequest.post(apiUrl, values);

  static removePost = (id: number): Promise<void> => apiRequest.delete(PostModel.buildFetchUrl({ url: apiUrl, id }));
}

export default PostModel;
