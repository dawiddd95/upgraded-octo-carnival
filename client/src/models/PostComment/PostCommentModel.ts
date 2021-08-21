import BaseModel, { IBaseModel, IBaseModelDTO } from '@models/BaseModel';
import { AxiosRequestConfig } from 'axios';
import { IHttpResponse, IHttpResponseList } from '@interfaces/HttpInterface';
import { apiRequest } from '@services/ApiService';
import { IPostCommentFormModelDTO } from '@models/PostComment/PostCommentFormModel';

const apiUrl = '/comments';

export interface IPostCommentModelDTO extends IBaseModelDTO {
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface IPostCommentModel extends IBaseModel {
  postId: number;
  name: string;
  email: string;
  body: string;

  serialize: () => IPostCommentModelDTO;
}

class PostCommentModel extends BaseModel implements IPostCommentModel {
  constructor(
    public id: number,
    public postId: number,
    public name: string,
    public email: string,
    public body: string
  ) {
    super(id);
  }

  serialize = () => ({
    id: this.id,
    postId: this.postId,
    name: this.name,
    email: this.email,
    body: this.body
  });

  static build = (dto: IPostCommentModelDTO): IPostCommentModel =>
    new PostCommentModel(dto.id, dto.postId, dto.name, dto.email, dto.body);

  static fetchCommentList = (config: AxiosRequestConfig = {}): Promise<IHttpResponseList<IPostCommentModelDTO>> =>
    apiRequest.get(apiUrl, config);

  static createComment = (values: IPostCommentFormModelDTO): Promise<IHttpResponse<IPostCommentModelDTO>> =>
    apiRequest.post(apiUrl, values);
}

export default PostCommentModel;
