import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-sale-tab-first',
  templateUrl: './sale-tab-first.component.html',
  styleUrls: ['./sale-tab-first.component.scss']
})
export class SaleTabFirstComponent {

  form?: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      id: null,
      date: null
    });
  }
}
