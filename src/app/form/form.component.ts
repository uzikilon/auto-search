import { Component, OnInit } from '@angular/core';

import { CarService } from '../car.service';
import { Manufacturer, Make, Model } from '../types';
import { createConf, AutocompleteControl } from './create.config';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private service: CarService) { }

  manufacturer: AutocompleteControl<Manufacturer> = createConf({
    fieldname: 'Mfr_Name',
    setup: () =>  this.service.getAllManufacturers(),
    optionSelected: (value) => {
      this.valid = false;
      this.make.reset();
      this.model.reset();
      this.make.setup(value);
    },
    reset: () => [this.make, this.model].forEach(m => m.reset())
  });

  make: AutocompleteControl<Make> = createConf({
    fieldname: 'Make_Name',
    setup: (value: Manufacturer) =>  this.service.getMakeForManufacturer(value.Mfr_ID),
    optionSelected: (value) => {
      this.valid = false;
      this.model.reset();
      this.model.setup(value);
    },
    reset: () => this.model.reset()
  });

  model: AutocompleteControl<Model> = createConf({
    fieldname: 'Model_Name',
    setup: (value: Model) =>  this.service.getModelsForMake(value.Make_Name),
    optionSelected: (value: Model) => {
      this.valid = false;
    },
    reset() {}
  });

  valid = false;

  ngOnInit(): void {
    this.manufacturer.setup();
  }

  validate() {
    if (this.model.value) {
      this.valid = true;
    }
    else {
      this.valid = false;
      alert('yikes');
    }
  }

}
