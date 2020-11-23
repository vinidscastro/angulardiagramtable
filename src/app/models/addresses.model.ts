import { GeoModel } from "./geo.model";

export class AddressesModel{
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoModel;
}
