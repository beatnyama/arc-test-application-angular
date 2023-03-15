import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CompositeShape } from '../models/composite-shape.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaCalculationServiceService {

  constructor(private http: HttpClient) { }

    /**
   * Perform a request to Add Enrolment using a Enrolment model as the request.
   */
    calculateArea(shape: CompositeShape): Observable<any> {
      return this.http.post<any>(environment.api + '/Shapes', shape);
    }
  
}
