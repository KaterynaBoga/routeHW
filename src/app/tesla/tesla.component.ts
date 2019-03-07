import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-tesla',
  templateUrl: './tesla.component.html',
  styleUrls: ['./tesla.component.css']
})
export class TeslaComponent implements OnInit {

  private id: number;
  private subscription: Subscription;
  private models;
  constructor(private activateRoute: ActivatedRoute, private carService: CarServiceService){

    this.subscription = activateRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.models = this.carService.getModels(this.id);
    });
  }

  ngOnInit() {
  }

}
