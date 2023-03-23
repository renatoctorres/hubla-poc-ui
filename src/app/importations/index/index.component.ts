import { Component } from '@angular/core';
import {Importation} from "../importation";
import {ImportationService} from "../importation.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  importations: Importation[] = [];
  constructor(public importationService: ImportationService) { }
  ngOnInit(): void {
    this.importationService.getAll().subscribe((data: Importation[])=>{
      this.importations = data;
      console.log(this.importations);
    })
  }
  deleteImportation(id:number){
    this.importationService.delete(id).subscribe(res => {
      this.importations = this.importations.filter(item => item.id !== id);
      console.log('Importation deleted successfully!');
    })
  }

}
