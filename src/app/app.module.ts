import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ShortenPipe } from './shared/shorten.pipe';
import { AppComponent } from './app.component';
import { FilterPipe } from './shared/filter.pipe';
import { ReversePipe } from './shared/reverse.pipe';
import { SortlistPipe } from './shared/sortlist.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortlistPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
