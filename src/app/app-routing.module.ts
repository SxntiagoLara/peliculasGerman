import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', component: SearchMovieComponent},
  { path: 'pelicula/:id', component: MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }