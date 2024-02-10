import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { Response } from 'src/app/shared/models/response';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.baseUrl;
  }

  get():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}/Patient`);
  }

  getByDocumentNumber(documenetNumber: string):Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}/Patient/GetPatientsByDocumentNumber?documentNumber=${documenetNumber}`);
  }
}
