import { Component, OnInit } from '@angular/core';
import { confs } from 'src/app/core/services/confs';
import { SettingsService } from 'src/app/core/services/settings.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private _settingsService: SettingsService) { }

  ngOnInit() {
  }

  redirectToRepo() {
    debugger;
    window.open(this._settingsService.getConfs.gitUrl, '_blank');
  }
}
