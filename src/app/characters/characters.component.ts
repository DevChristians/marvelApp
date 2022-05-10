import { MarvelApiService } from '../shared/services/marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  title = 'Characters';

  constructor(
    private characterService: MarvelApiService,
    private route: ActivatedRoute
  ) { }
  
  allCharacters: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.url.subscribe( type => {
      this.getAllCharacters(type);
    });
    
  }

  getAllCharacters(type: any){
    this.allCharacters = this.characterService.getAll(type);
  }
  

}
