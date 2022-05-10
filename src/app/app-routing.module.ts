import { HomeComponent } from './home/home.component';
import { DetailComponent } from './shared/components/detail/detail.component';
import { FormsComponent } from './forms/forms.component';
import { SeriesComponent } from './series/series.component';
import { ComicsComponent } from './comics/comics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'characters', component: CharactersComponent, 
  },
  {
    path: 'comics', component: ComicsComponent
  },
  {
    path: 'series', component: SeriesComponent
  },
  {
    path: ':type/detail/:id', component: DetailComponent
  },
  {
    path: 'forms', component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
