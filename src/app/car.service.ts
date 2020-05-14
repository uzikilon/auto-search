import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManufacturerResponse, MakeResponse, ModelResponse } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor( private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/api/vehicles';

  getMakeForManufacturer(manufacturer: number) {
    return this.get<MakeResponse>('GetMakeForManufacturer', '' + manufacturer);
  }

  getModelsForMake(make: string) {
    return this.get<ModelResponse>('GetModelsForMake', make);
  }

  getAllManufacturers() {
    return this.get<ManufacturerResponse>('getallmanufacturers');
  }

  private get<T>(...pathChunks: string[]) {
    const url = [this.baseUrl, ...pathChunks].join('/');
    return this.http.get(url, {params: {format: 'json'}}) as Observable<T>;
  }
}
