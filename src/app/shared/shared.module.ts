import { AppRoutingModule } from './../app-routing.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailComponent } from './components/detail/detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatListModule } from '@angular/material/list';
import { CarouselComponent } from './components/detail/carousel/carousel.component';
import { CardComponent } from './components/detail/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToUpperCasePipe } from './to-upper-case.pipe';

@NgModule({
  declarations: [
    HeroCardComponent,
    DetailComponent,
    CarouselComponent,
    CardComponent,
    NavbarComponent,
    ToUpperCasePipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    AppRoutingModule,
    MatTabsModule,
    IvyCarouselModule,
    MatListModule,
  ],
  exports: [
    HeroCardComponent,
    DetailComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
