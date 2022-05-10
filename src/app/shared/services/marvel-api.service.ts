import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  PUBLIC_KEY = '3830f4a385eee544258345c78439ee0f';
  HASH = 'fa65c8a097c551a7da9bd829e884faca';
  BASE_URL = 'https://gateway.marvel.com/v1/public/';
  BASE_TOKEN = `?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAll(type: any):Observable<any> {
    let URL_API = this.BASE_URL + type + this.BASE_TOKEN;
    return this.http.get<any>(URL_API)
      .pipe(
        map(
          (response: any) => response.data.results
        )
      )
  }

  getDetail(id: any, type: any):Observable<any> {
    let URL_API = this.BASE_URL + type + '/' + id + this.BASE_TOKEN;
    return this.http.get<any>(URL_API)
      .pipe(
        map(
          (response: any) =>  response.data.results[0]
        )
      )
  }

  getCharacters(id: any, type: any):Observable<any> {
    let URL_API = this.BASE_URL + type +'/' + id + '/characters' + this.BASE_TOKEN;
    return this.http.get<any>(URL_API)
      .pipe(
        map(
          (response: any) =>  response.data.results
        )
      )
  }

  getCreators(id: any, type: any):Observable<any> {
    let URL_API = this.BASE_URL + type +'/' + id + '/creators' + this.BASE_TOKEN;
    return this.http.get<any>(URL_API)
      .pipe(
        map(
          (response: any) =>  response.data.results
        )
      )
  }

  getComics(id: any, type: any):Observable<any> {
    let URL_API = this.BASE_URL + type +'/' + id + '/comics' + this.BASE_TOKEN;
    return this.http.get<any>(URL_API)
      .pipe(
        map(
          (response: any) =>  response.data.results
        )
      )
  }

  getSeries(id: any, type: any):Observable<any> {
    let URL_API = this.BASE_URL + type +'/' + id + '/series' + this.BASE_TOKEN;
    return this.http.get<any>(URL_API)
      .pipe(
        map(
          (response: any) =>  response.data.results
        )
      )
  }

  getStories(id: any, type: any):Observable<any> {
    let URL_API = this.BASE_URL + type +'/' + id + '/stories' + this.BASE_TOKEN;
    return this.http.get<any>(URL_API)
      .pipe(
        map(
          (response: any) =>  response.data.results
        )
      )
  }
}
