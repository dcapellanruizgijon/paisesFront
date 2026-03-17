import { Injectable } from '@angular/core';
import { PaisPersonal } from './pais-personal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisPersonalService {

  private apiUrl = 'http://localhost:8080/api/paises';

    constructor(private http: HttpClient) { }

    // GET all - Obtener todos mis países
    getMisPaises(): Observable<PaisPersonal[]> {
        return this.http.get<PaisPersonal[]>(this.apiUrl);
    }

    // GET by id - Obtener un país por ID
    getPais(id: number): Observable<PaisPersonal> {
        return this.http.get<PaisPersonal>(`${this.apiUrl}/${id}`);
    }

    // POST - Crear nuevo país personal
    crearPais(pais: PaisPersonal): Observable<PaisPersonal> {
        return this.http.post<PaisPersonal>(this.apiUrl, pais);
    }

    //Actualizamos país existente
    actualizarPais(id: number, pais: PaisPersonal): Observable<PaisPersonal> {
        return this.http.put<PaisPersonal>(`${this.apiUrl}/${id}`, pais);
    }

    // DELETE - Eliminar país
    eliminarPais(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
