import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HousinglocationComponent, 
    CommonModule
  ],
  template: `
    <section class = "searchForm">
      <form (submit)="$event.preventDefault()">
        <input type="text" placeholder="Filter by city" #filter (keydown.enter)="filterResults(filter.value)">
        <button class = "primary" type = "button" (click) = "filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housinglocation *ngFor = "let housingLocation of filteredLocationList" [housingLocation] = "housingLocation">
      </app-housinglocation>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList
    })
  }
  filterResults(text: string) {
    console.log(text)
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    } else {
      text = text.toLocaleLowerCase();
      this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation.city.toLocaleLowerCase().includes(text));
    }
  }
}
