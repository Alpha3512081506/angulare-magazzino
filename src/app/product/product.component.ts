import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  formGroupProduct?: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroupProduct = this.fb.group(
      {
        'name': ['']
      }
    )
  }

}
