import { AxiosResponse } from 'axios';

export interface IHttpResponse<T> extends AxiosResponse<T> {}

export interface IHttpResponseList<T> extends Omit<IHttpResponse<T>, 'data'> {
  data: T[];
}
