import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutobePlaylistComponent } from './youtobe-playlist/youtobe-playlist.component';
import { YoutobePlayerComponent } from './youtobe-player/youtobe-player.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    YoutobePlaylistComponent,
    YoutobePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
