import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://yourbackendapi'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  public loadData(month: string, year: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/files/search?month=${month}&year=${year}`);
  }

  public downloadFile(fileId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/files/download/${fileId}`, { responseType: 'blob' });
  }
}
