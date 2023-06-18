import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product/product.service';
//import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  selectedFile: File | null = null;

  productData = {
    titles: '',
    description: '',
    price: 0,
    quantityStock: 0,
    categories: '',
    rating: 0,
    published: false
  };
  categories: any[] = [];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {


    this.getCategories();
  }
  getCategories(): void {
    this.productService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      this.productService.uploadProductImage(formData, this.productData)
        .subscribe(
          (response) => {
            console.log('Image uploaded successfully', response);
            this.productData = {
              titles: '',
              description: '',
              price: 0,
              quantityStock: 0,
              categories: '',
              rating: 0,
              published: false
            };
            this.selectedFile = null;
          },
          (error) => {
            console.error('Error uploading image', error);
          }
        );
    }
  }
}

