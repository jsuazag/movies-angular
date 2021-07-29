import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public title: string = 'angular-ws-app';
  public nombre: string = 'Jerson';
  public showData: boolean = false;
  public movies: Array<Movie> = [];

  constructor (private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  public mostarOcultarDatos (): void {
    this.showData = !this.showData;
  }

  private loadMovies (): void {
    this.movies = this.moviesService.getAll();
  }

}
