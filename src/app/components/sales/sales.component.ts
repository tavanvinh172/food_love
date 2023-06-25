import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SalesComponent {

  form?: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      id: null,
      date: null
    });
  }



}
