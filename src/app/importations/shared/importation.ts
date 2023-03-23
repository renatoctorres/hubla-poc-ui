import {Transaction} from "../../transactions/shared/transaction";

export class Importation {
  id: number = 0;
  createdAt : string = ""
  user : string = "";
  transactions : Transaction[] = [];

}
