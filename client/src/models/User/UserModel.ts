import BaseModel, { IBaseModel, IBaseModelDTO } from '@models/BaseModel';
import UserAddressModel, { IUserAddressModel, IUserAddressModelDTO } from '@models/User/UserAddressModel';
import UserCompanyModel, { IUserCompanyModel, IUserCompanyModelDTO } from '@models/User/UserCompanyModel';
import { AxiosRequestConfig } from 'axios';
import { IHttpResponse, IHttpResponseList } from '@interfaces/HttpInterface';
import { apiRequest } from '@services/ApiService';
import { avatars } from '@utils/usersAvatars';

const apiUrl = '/users';

export interface IUserModelDTO extends IBaseModelDTO {
  name: string;
  username: string;
  email: string;
  address: IUserAddressModelDTO;
  phone: string;
  website: string;
  company: IUserCompanyModelDTO;
}

export interface IUserModel extends IBaseModel {
  name: string;
  username: string;
  email: string;
  address: IUserAddressModel;
  phone: string;
  website: string;
  company: IUserCompanyModel;
  img: string

  serialize: () => IUserModelDTO;
}

class UserModel extends BaseModel implements IUserModel {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public address: IUserAddressModel,
    public phone: string,
    public website: string,
    public company: IUserCompanyModel,
    public img: string
  ) {
    super(id);
  }

  serialize = (): IUserModelDTO => ({
    id: this.id,
    name: this.name,
    username: this.username,
    email: this.email,
    address: this.address,
    phone: this.phone,
    website: this.website,
    company: this.company
  });

  static build = (dto: IUserModelDTO): IUserModel =>
    new UserModel(
      dto.id,
      dto.name,
      dto.username,
      dto.email,
      UserAddressModel.build(dto.address),
      dto.phone,
      dto.website,
      UserCompanyModel.build(dto.company),
      avatars[dto.id-1]
    );

  static fetchUserList = (config: AxiosRequestConfig = {}): Promise<IHttpResponseList<IUserModelDTO>> =>
    apiRequest.get(apiUrl, config);

  static fetchUser = (id: string, config: AxiosRequestConfig = {}): Promise<IHttpResponse<IUserModelDTO>> =>
    apiRequest.get(UserModel.buildFetchUrl({ url: apiUrl, id }), config);
}

export default UserModel;
