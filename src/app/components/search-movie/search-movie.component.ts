import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Router } from '@angular/router'; //para enviar valores a otro componente

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {

  constructor(private serviceMovie: MovieServiceService, private router: Router) {}

  peliculaBuscar: string;
  peliculas: any[] = []
  notFound:any;

  getMovies() {
    this.notFound = ""
    this.peliculas = []
    console.log(this.peliculaBuscar);
    
    this.serviceMovie.getMovies(this.peliculaBuscar).subscribe
      (respuesta => {
        console.log(respuesta);
        if (respuesta.Error == "Movie not found!") {
          this.notFound = respuesta.Error
        } else {
          this.peliculas = respuesta.Search    
        }
      }),
      (error => {
        console.log(error);
      })
  }

  movie(id:string) {
    this.router.navigate(['pelicula', id])
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.getMovies()
    }
  }

  // regresar() {
  //   // this.peliculaBuscar = nombrePeli
  //   this.getMovies()
  // }
}
