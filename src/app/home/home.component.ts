import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
<!--home.location -->
  <section class="results">
    <app-housing-location></app-housing-location>
  </section>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Add test item
    readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

    housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
