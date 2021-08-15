import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StoreItem } from "../../store/models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  getAllAuthors() {
    return this.http.get<StoreItem[]>('http://localhost:3000/api/getAllAuthors');
  }

  getAll() {
    return this.http.get<StoreItem[]>('http://localhost:3000/api/getAllItems');
  }

  create(item: StoreItem) {
    return this.http.post('http://localhost:3000/api/saveItem', item);
  }

  update(item: StoreItem) {
    this.http.put(`http://localhost:3000/api/updateItem/${item.id}`, item);
  }

  getOne(itemId: number) {
    return this.http.get(`http://localhost:3000/api/getItem/${itemId}`);
  }

  getByAuthor(authorId: number) {
    return this.http.get<StoreItem[]>(`http://localhost:3000/api/getAllItemsByAuthor/${authorId}`);
  }

  getAuthors() {
    return this.http.get<StoreItem[]>(`http://localhost:3000/api/getAllAuthors`);
  }

  delete(itemId: number) {
    return this.http.delete(`http://localhost:3000/api/deleteItem/${itemId}`);
  }
}
