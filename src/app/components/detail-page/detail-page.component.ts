import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  public movieId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadParams();
  }

  private loadParams (): void {
    this.route.params.subscribe(params => {
      const id = Number(params.id);
      this.movieId = id;
    });
  }

}
