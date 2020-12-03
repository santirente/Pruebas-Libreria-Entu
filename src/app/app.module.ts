import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    GoogleChartsModule.forRoot({ mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
