import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PriceBuilderService {

  constructor() { }

  decimals(nb) {
    if (_.isString(nb)) {
      return nb;
    }
    return Math.round(nb * 100) / 100;
  }

  cout(prix, type) {
    // TODO FIXME
    // const vars = cases[type];
    // const r = {type};

    // r.csInt = prix * vars.csInt - vars.rCsIntFixed;
    // r.intTotal = prix + r.csInt;
    // r.rIR = prix * vars.rIRPrix + r.csInt * vars.rIRCS;
    // r.remu = (prix * vars.direct + r.csInt - r.rIR) / (1 - TMI);
    // r.IR = r.remu * TMI;
    // r.cs = r.remu * 0.45;
    // r.rIS = (prix * !vars.direct + r.remu + r.cs) * 0.28 + prix * vars.creditIS;
    // r.cout = r.remu + r.cs - r.rIS + prix * !vars.direct;

    // return r;
  }
}
