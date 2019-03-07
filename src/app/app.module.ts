import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { TeslaComponent } from './tesla/tesla.component';
import { FerrariComponent } from './ferrari/ferrari.component';



const routes: Route[] = [
  {
    path: 'brand/:id',
    component: TeslaComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TeslaComponent,
    FerrariComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
