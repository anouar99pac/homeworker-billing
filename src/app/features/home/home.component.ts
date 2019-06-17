import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PriceBuilderService } from './../../core/services/price-builder.service';
import { regex } from 'src/app/shared/constants/regex';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  handlePricingForm: FormGroup;
  isSubmitted = false;
  isComputed = false;
  netPrice = null;
  gridResult = [];

  constructor(private _fb: FormBuilder, private _priceBuilder: PriceBuilderService) {
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
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
      this.isComputed = true;
    }, 3000);
    const price = this.handlePricingForm.value.price;
    const option = this.handlePricingForm.value.withoutCharges;
    this.netPrice = this._priceBuilder.computeNetPrice(price, option);
    this.gridResult = this._priceBuilder.computeResult(this.netPrice);
    return;

  }
}
