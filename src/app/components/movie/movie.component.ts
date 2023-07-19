import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //para recibir valores de otro componente
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  constructor(private serviceMovie: MovieServiceService, private routeAct: ActivatedRoute, private router: Router) {}

  idPelicula: string;
  pelicula: any


  ngOnInit(): void {
    this.idPelicula = this.routeAct.snapshot.params["id"]
    this.serviceMovie.movie(this.idPelicula).subscribe(
      (pelicula => {
        this.pelicula = pelicula
        console.log(pelicula );
      }),
      (error => {
        console.log("err: " + error);
      })
    )
  }

}
