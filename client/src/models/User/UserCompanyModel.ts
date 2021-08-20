export interface IUserCompanyModelDTO {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserCompanyModel {
  name: string;
  catchPhrase: string;
  bs: string;

  serialize: () => IUserCompanyModelDTO;
}

class UserCompanyModel implements IUserCompanyModel {
  constructor(public name: string, public catchPhrase: string, public bs: string) {}

  serialize = (): IUserCompanyModelDTO => ({
    name: this.name,
    catchPhrase: this.catchPhrase,
    bs: this.bs
  });

  static build = (dto: IUserCompanyModelDTO): IUserCompanyModel =>
    new UserCompanyModel(dto.name, dto.catchPhrase, dto.bs);
}

export default UserCompanyModel;