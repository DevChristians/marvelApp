import { MarvelApiService } from '../shared/services/marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  title = 'Series';

  constructor(
    private serieService: MarvelApiService,
    private route: ActivatedRoute
  ) { }

  allSeries: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.url.subscribe( type => {
      this.getAllSeries(type);
    });
  }

  getAllSeries(type: any){
    this.allSeries = this.serieService.getAll(type);
  }

}
