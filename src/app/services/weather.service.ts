import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  public temperatura(cidade: string): Observable<any> {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}`;
    url += ',br&appid=37e4defe733067fef8b3c3ec85ce8e3c&units=metric&lang=pt';
    return this.http.get(url);
  }
}
