import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MarvelApiService } from 'src/app/shared/services/marvel-api.service';
import { CarouselObject } from '../../models/interfaces/carousel-interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:         number | undefined;
  item:       any;
  characters: CarouselObject [] = [];
  creators:   CarouselObject [] = [];
  comics:     CarouselObject [] = [];
  series:     CarouselObject [] = [];
  stories:    Array<any> = [];
  type:       any;

  private subscription_item:        Subscription | undefined;
  private subscription_characters:  Subscription | undefined;
  private subscription_comics:      Subscription | undefined;
  private subscription_series:      Subscription | undefined;
  private subscription_stories:     Subscription | undefined;
  private subscription_creators:    Subscription | undefined;

  constructor(
    private route:          ActivatedRoute,
    private detailService:  MarvelApiService,
    private _location: Location
  ) { }

  ngOnDestroy(): void {
    if (this.subscription_item != null){
      this.subscription_item.unsubscribe();
    } 
    if (this.subscription_characters != null){
      this.subscription_characters.unsubscribe();
    }
    if (this.subscription_creators != null){
      this.subscription_creators.unsubscribe();
    }
    if (this.subscription_comics != null){
      this.subscription_comics.unsubscribe();
    }
    if (this.subscription_series != null){
      this.subscription_series.unsubscribe();
    }
    if (this.subscription_stories != null){
      this.subscription_stories.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id   = params['id'];
      this.type = params['type'];
    });
    
    this.getDetail();
    this.getStories();

    if(this.type !== 'characters') {
      this.getCharacters();
      this.getCreators();
      if(this.type === 'series') this.getComics();
    }else{
      this.getSeries();
      this.getComics();
    }
  }

  getDetail(){
    this.subscription_item = this.detailService.getDetail(this.id, this.type).subscribe(result => { 
      this.item = result;
    })
  }

  getCharacters(){
    this.subscription_characters = this.detailService.getCharacters(this.id, this.type).subscribe(result => { 
      result.forEach((
        element: { 
          thumbnail: { 
            path: any; 
            extension: any; 
          }; 
        }) => {
        this.characters.push(this.getObject(element.thumbnail));
      });
    })
  }

  getCreators(){
    this.subscription_creators = this.detailService.getCreators(this.id, this.type).subscribe(result => { 
      result.forEach((
        element: { 
          thumbnail: { 
            path: any; 
            extension: any; 
          }; 
        }) => {
        this.creators.push(this.getObject(element.thumbnail));
      });
    })
  }

  getComics(){
    this.subscription_comics = this.detailService.getComics(this.id, this.type).subscribe(result => { 
      result.forEach((
        element: { 
          thumbnail: { 
            path: any; 
            extension: any; 
          }; 
        }) => {
        this.comics.push(this.getObject(element.thumbnail));
      });
    })
  }

  getSeries(){
    this.subscription_series = this.detailService.getSeries(this.id, this.type).subscribe(result => { 
      result.forEach((
        element: { 
          thumbnail: { 
            path: any; 
            extension: any; 
          }; 
        }) => {
        this.series.push(this.getObject(element.thumbnail));
      });
    })
  }

  getObject(element: any){
    return {
      path: element.path,
      extension: element.extension,
    }
  }

  getStories(){
    this.subscription_stories = this.detailService.getStories(this.id, this.type).subscribe(result => { 
      this.stories = result;
    })
  }

  backClicked() {
    this._location.back();
  }

}
