import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListDriversComponent } from './list-drivers/list-drivers.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ListDriversComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOl6qurgJHDdTS-DKqJMT9oecvv1C3KUQ'
    }),
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
