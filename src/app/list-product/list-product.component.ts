import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: any  ;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.getProducts();

  }

  getProducts(): void {
    this.productService.getProducts().subscribe(data=>{
      console.log(data)
      this.products=data
    })

  }
}
