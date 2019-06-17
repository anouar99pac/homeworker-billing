import { Injectable } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings.service';
import * as _ from 'lodash';
import { IGridResult } from 'src/app/models/global-model';

@Injectable({
  providedIn: 'root'
})
export class PriceBuilderService {
  netPrice: number = null;
  TMI = 0.3;
  cases;
  finalResult = {black: 0, };
  // TODO we set each settings
  constructor(private _settingsService: SettingsService) {
    this.cases = this._settingsService.gettingCases;
  }

  computeNetPrice(prix: number, withoutCharges: boolean): number {
      this.netPrice = withoutCharges ? prix * (1 - 0.233) : prix;
      this.netPrice = this.decimals(this.netPrice);
      return this.netPrice;
  }

  decimals(nb) {
    if (_.isString(nb)) {
      return nb;
    }
    return Math.round(nb * 100) / 100;
  }

  counting(prix, type): {} {
    // TODO FIXME
    const vars = this.cases[type];
    const r = {csInt: 0, intTotal: 0, rIR: 0, remu: 0, IR: 0, cs: 0, rIS: 0, cout: 0};
    r.csInt = prix * vars.csInt - vars.rCsIntFixed;
    r.intTotal = prix + r.csInt;
    r.rIR = prix * vars.rIRPrix + r.csInt * vars.rIRCS;
    r.remu = (prix * vars.direct + r.csInt - r.rIR) / (1 - this.TMI);
    r.IR = r.remu * this.TMI;
    r.cs = r.remu * 0.45;
    const _var = Number(!vars.direct);
    r.rIS = (prix * _var + r.remu + r.cs) * 0.28 + prix * vars.creditIS;
    r.cout = r.remu + r.cs - r.rIS + prix * _var;
    return r;
  }

  compute(type) {
    const currentRow = {type};
    Object.assign(currentRow, this.counting(Number(this.netPrice), type));
    return currentRow;
  }

  computeResult(netPrix): IGridResult[] {
    const res = _.keys(this.cases).map(type => {
       return this.compute(type);
    });
    // console.table(res);
    return res;
  }
}
