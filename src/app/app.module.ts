import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { CharactersComponent } from './characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsComponent } from './forms/forms.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { SharedModule } from './shared/shared.module';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
  
    CharactersComponent,
    ComicsComponent,
    FormsComponent,
    SeriesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTabsModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo es requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Esperando ${requiredLength} caracteres pero tengo ${actualLength}`,
          maxlength: ({ requiredLength, actualLength }) => 
                      `Solo ${requiredLength} caracteres pero hay ${actualLength}`,
          invalidAddress: error => `La dirección es invalida`
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
