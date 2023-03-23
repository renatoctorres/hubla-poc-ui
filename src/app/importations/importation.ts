import {Transaction} from "../transactions/transaction";

export interface Importation {
  id: number;
  createdAt : string;
  transactions : Transaction[];
}
