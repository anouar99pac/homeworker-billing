import { Injectable } from '@angular/core';
import { confs } from './confs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  TMI = 0.3;
  CSAE = 1 / (1 - 0.233) - 1;
  CSEmployee = 0.83;

  constructor() { }

  get getConfs() {
    return confs;
  }

  gettingCases() {
    const cases = {
      black: {
        csInt: 0,
        rCsIntFixed: 0,
        rIRPrix: 0,
        rIRCS: 0,
        creditIS: 0,
        direct: 1,
      },
      AE: {
        csInt: this.CSAE,
        rCsIntFixed: 0,
        rIRPrix: 0,
        rIRCS: 0,
        creditIS: 0,
        direct: 1,
      },
      'AE-SAP': {
        csInt: this.CSAE,
        rCsIntFixed: 0,
        rIRPrix: 0.5,
        rIRCS: 0.5,
        creditIS: 0,
        direct: 1,
      },
      CESU: {
        csInt: this.CSEmployee,
        rCsIntFixed: 2,
        rIRPrix: 0.5,
        rIRCS: 0.5,
        creditIS: 0,
        direct: 1,
      },
      'CESU-pre': {
        csInt: this.CSEmployee,
        rCsIntFixed: 2,
        rIRPrix: 0,
        rIRCS: 0.5,
        creditIS: 0.25,
        direct: 0,
      },
      'CESU-pre-post': {
        csInt: this.CSEmployee,
        rCsIntFixed: 2,
        rIRPrix: 0.5,
        rIRCS: 0.5,
        creditIS: 0.25,
        direct: 1,
      },
      // 'CESU-decla': {
      //   csInt: CSEmployee,
      //   rCsIntFixed: 2,
      //   rIRPrix: 0.5,
      //   rIRCS: 0.5,
      //   creditIS: 0.25,
      //   direct: 0,
      // },
    };
    // handle all cases for each status
    return cases;
  }
}
