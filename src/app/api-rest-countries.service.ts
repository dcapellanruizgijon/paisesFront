import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from './pais';

@Injectable({
  providedIn: 'root'
})
export class ApiRestCountriesService {

  private apiUrl = 'https://restcountries.com/v3.1/';


  constructor(private http: HttpClient) { }

  //para recuperar los alumnos
  getAllPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl + 'all?fields=name,unMember,currencies,capital,region,flags,population');
  }

  
  //para el formulario de insertar alumnos
  // insertarAlumno(pais: Pais): Observable<any> {
  //   return this.http.post(this.apiUrl + 'insertar_alunmno.php', pais);
  // }

}
