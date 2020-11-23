import { AddressesModel } from "./addresses.model";
import { CompanyModel } from "./company.model";

export class UserModel{
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressesModel;
  phone: string;
  website: string;
  company: CompanyModel;
}
