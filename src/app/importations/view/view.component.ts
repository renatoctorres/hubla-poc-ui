import { Component, OnInit } from '@angular/core';
import { ImportationService } from '../importation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Importation } from '../importation';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  importation: Importation;

  constructor(
    public importationService: ImportationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['importationId'];

    this.importationService.find(this.id).subscribe((data: Importation)=>{
      this.importation = data;
    });
  }

}
