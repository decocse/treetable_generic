import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://localhost:7039/api'; // Replace with your actual API URL
//https://localhost:7039/api/Files/search?month=1&year=2024
  constructor(private http: HttpClient) { }

  public loadData(month: string, year: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/Files/search?month=${month}&year=${year}`);
  }

  public downloadFile(fileId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/files/download/${fileId}`, { responseType: 'blob' });
  }
}
