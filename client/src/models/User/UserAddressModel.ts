import UserAddressGeoModel, {
  IUserAddressGeoModel,
  IUserAddressGeoModelDTO
} from '@models/User/UserAddressGeoModel';

export interface IUserAddressModelDTO {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserAddressGeoModelDTO;
}

export interface IUserAddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserAddressGeoModelDTO;

  serialize: () => IUserAddressModelDTO;
}

class UserAddressModel implements IUserAddressModel {
  constructor(
    public street: string,
    public suite: string,
    public city: string,
    public zipcode: string,
    public geo: IUserAddressGeoModel
  ) {}

  serialize = (): IUserAddressModelDTO => ({
    street: this.street,
    suite: this.suite,
    city: this.city,
    zipcode: this.zipcode,
    geo: this.geo.serialize()
  });

  static build = (dto: IUserAddressModelDTO): IUserAddressModel =>
    new UserAddressModel(dto.street, dto.suite, dto.city, dto.zipcode, UserAddressGeoModel.build(dto.geo));
}

export default UserAddressModel;
