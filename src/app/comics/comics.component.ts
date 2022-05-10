import { MarvelApiService } from '../shared/services/marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  title = 'Comics';

  constructor(
    private comicService: MarvelApiService,
    private route: ActivatedRoute
  ) { }
  
  allComics: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.url.subscribe( type => {
      this.getAllComics(type);
    });
  }

  getAllComics(type: any){
    this.allComics = this.comicService.getAll(type);
  }

}
