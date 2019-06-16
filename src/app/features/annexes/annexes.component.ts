import { Component, OnInit } from '@angular/core';
import { IDictionnary } from 'src/app/models/global-model';
import { dictionnaryResults, dictionnaryColumns } from 'src/app/shared/constants/dictionnary';

@Component({
  selector: 'app-annexes',
  templateUrl: './annexes.component.html',
  styleUrls: ['./annexes.component.scss']
})
export class AnnexesComponent implements OnInit {
  displayedColumns: string[] = ['word', 'meaning'];
  dicResults: IDictionnary[] = [];
  dicAbreviations: IDictionnary[] = [];

  constructor() {
    this.dicResults = dictionnaryResults;
    this.dicAbreviations = dictionnaryColumns;
   }

  ngOnInit() {
  }

}
