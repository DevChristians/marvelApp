import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = '3830f4a385eee544258345c78439ee0f';
  HASH = 'fa65c8a097c551a7da9bd829e884faca';
  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters():Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(
        map(
          (response: any) => response.data.results
        )
      )
  }
}
