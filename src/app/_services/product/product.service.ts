import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  addProduct(product: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}addProduct`, product);
  }
  uploadProductImage(formData: FormData, productData: any) {
    formData.append('titles', productData.titles);
    formData.append('description', productData.description);
    formData.append('price', productData.price);
    formData.append('quantityStock', productData.quantityStock);
    formData.append('categories', productData.categories);
    formData.append('rating', productData.rating);
    formData.append('published', productData.published);

    return this.http.post<any>(`${this.baseUrl}product/upload-image`, formData);
  }


  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}products`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}category`);
  }
  getImage(imageUrl: string): Observable<any> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }
 /*uploadProductImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image, image.name);

    return this.http.post(`${this.baseUrl}product/upload-image`, formData);
  }
  updateProductImage(productId: string, imageId: string): Observable<any> {
    const body = { productId, imageId };
    return this.http.put(`${this.baseUrl}product/update-image`, body);
  }*/

  }




