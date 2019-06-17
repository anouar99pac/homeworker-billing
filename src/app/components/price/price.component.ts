import { Component, OnInit, Input } from '@angular/core';
import { IGridResult } from 'src/app/models/global-model';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  displayedColumns: string[] = ['type', 'csInt', 'intTotal', 'rIR', 'remu', 'IR', 'cs', 'rIS', 'cout'];
  @Input() dataGridResults: IGridResult[];
  @Input() netPrice;

  constructor() { }

  ngOnInit() {
  }

}
