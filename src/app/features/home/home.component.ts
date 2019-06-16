import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { regex } from 'src/app/shared/constants/regex';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  handlePricingForm: FormGroup;
  isSubmitted = false;

  constructor(private _fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.handlePricingForm = this._fb.group({
        price: [null, Validators.compose([Validators.required, Validators.pattern(regex.amount)])],
        withoutCharges: [false],
    });
  }

  onSubmit() {

  }
}
