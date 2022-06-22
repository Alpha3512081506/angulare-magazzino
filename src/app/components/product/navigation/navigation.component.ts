import { Component, EventEmitter, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output()
  productEventEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onNewProduct() { }
  onGetTest() { }
  onGetAvallableProducts() { }
  onGetSelectedProducts() { }
  onGetAllProduct() {
    this.productEventEmitter.emit("ALL_PRODUCTS");

  }
  onSearch(keyord: string) {

  }

}
