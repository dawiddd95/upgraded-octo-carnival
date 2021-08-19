export interface IUserAddressGeoModelDTO {
  lat: string;
  lng: string;
}

export interface IUserAddressGeoModel {
  lat: string;
  lng: string;

  serialize: () => IUserAddressGeoModelDTO;
}

class UserAddressGeoModel implements IUserAddressGeoModel {
  constructor(public lat: string, public lng: string) {}

  serialize = (): IUserAddressGeoModelDTO => ({
    lat: this.lat,
    lng: this.lng
  });

  static build = (dto: IUserAddressGeoModelDTO): IUserAddressGeoModel => new UserAddressGeoModel(dto.lat, dto.lng);
}

export default UserAddressGeoModel;
