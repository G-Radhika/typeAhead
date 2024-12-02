import { Injectable, signal } from "@angular/core";
import { Country, countries } from "./data.model";
import { toObservable } from '@angular/core/rxjs-interop';


@Injectable({
    providedIn: 'root'
})
export class CountryService {
    constructor() { }

    allCountries = signal<Country[]>(countries);
    filterArr = signal<Country[]>([]);

    allCountries$ = toObservable(this.allCountries);
    getCountries() {
        return toObservable(this.allCountries);
    }
}

