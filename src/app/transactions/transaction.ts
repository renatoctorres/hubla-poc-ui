import {Product} from "../products/product";
import {Seller} from "../sellers/seller";

export interface Transaction {
  id: number
  type: string;
  product : Product;
  valueTransaction : number;
  seller : Seller;
  createdAt : Date;
}
