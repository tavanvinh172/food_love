import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(
    private http: HttpClient
  ) { }

  getMapByCode(provinceCode: string | undefined): Observable<any> {
    if (provinceCode) {
      return this.http.get('../../../assets/mapDataJSON/gadm36_VNM_2.json')
    }
    return this.http.get('assets/mapDataJSON/gadm36_VNM_1.json')
  }
}
