import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroObject } from '../shared/models/interfaces/hero-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home';

  charactersPage  : Array<any> = [];
  comicsPage      : Array<any> = [];
  seriesPage      : Array<any> = [];
  formsPage       : Array<any> = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ){}

  ngOnInit(): void {
    this.setPage(this.charactersPage, null, '', { path: 'https://i.blogs.es/270d91/personajes-de-stan-lee/1366_2000', extension: 'jpg' }, 'Go to Characters');
    this.setPage(this.comicsPage, null, '', { path: 'https://s03.s3c.es/imag/_v0/640x450/6/8/c/comic-marvel-portada', extension: 'jpg' }, 'Go to Comics');
    this.setPage(this.seriesPage, null, '', { path: 'https://as01.epimg.net/meristation/imagenes/2021/01/15/noticias/1610696982_763122_1647433423_sumario_normal', extension: 'jpg' }, 'Go to Series');
    this.setPage(this.formsPage, null, '', { path: 'https://marketing4ecommerce.net/wp-content/uploads/2021/07/Depositphotos_116977372_s-2019-min', extension: 'jpg' }, 'Go to Forms');
  }

  setPage(page: any, id: any, title: string, thumbnail: any, buttonText: string){
    page.id = id;
    page.title = title;
    page.thumbnail = thumbnail;
    page.buttonText = buttonText;
  }

  goToCharacters(){
    this.router.navigate(['/characters'], { relativeTo: this.route });
  }

  goToComics(){
    this.router.navigate(['/comics'], { relativeTo: this.route });
  }

  goToSeries(){
    this.router.navigate(['/series'], { relativeTo: this.route });
  }

  goToForms(){
    this.router.navigate(['/forms'], { relativeTo: this.route });
  }

}
