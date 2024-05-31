import { Routes } from '@angular/router';
import {MovieComponent} from "./components/movie/movie.component";
import {MovieDetailsComponent} from "./pages/movie-details/movie-details.component";

export const routes: Routes = [
  {
    path:'',
    component: MovieComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  }
];
