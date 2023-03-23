import {Seller} from "../sellers/shared/seller";

export interface Account {
  id: number;
  seller: Seller;
  ammount : number;

}
