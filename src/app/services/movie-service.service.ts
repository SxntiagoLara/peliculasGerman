import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' //conexión, comunicacion http y acceder a métodos http
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private url: string = "https://omdbapi.com/?apikey="
  private clave: string = "1fc5eab9"

  constructor(private http: HttpClient) { }

  getMovies(peliculaBuscar:string): Observable <any> {
    return this.http.get(`${this.url}${this.clave}&s=${peliculaBuscar}`)
  }

  movie(idPelicula:string): Observable <any> {
    return this.http.get(`${this.url}${this.clave}&i=${idPelicula}`)
  }


}
