import { Component, OnInit } from '@angular/core';
import { CarServiceService } from './car-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routes';
  brands = [];

  constructor(private carService: CarServiceService) {}

  ngOnInit() {
    this.brands = this.carService.getBrands();
  }
}
