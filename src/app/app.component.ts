import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './country.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'typeAhead';

  constructor() {
  }

  countries$ = inject(CountryService).getCountries();
  filter = new FormControl<string>('');

  filteredCountries$ = this.countries$.pipe(
    withLatestFrom(this.filter.valueChanges),
    map(([countries, filter]) => countries.filter(
      country => country.name.toLowerCase().includes(filter.toLowerCase()))
  );
}
