import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div>
      <select [(ngModel)]="selectedMonth">
        <option value="1">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <select [(ngModel)]="selectedYear">
        <option *ngFor="let year of years" [value]="year">{{ year }}</option>
      </select>
      <button (click)="onSearch()">Search</button>
    </div>
  `
})
export class SearchComponent {
  @Output() search = new EventEmitter<{ month: string, year: number }>();

  selectedMonth: string = 'January'; // default value
  selectedYear: number = new Date().getFullYear(); // default value
  years: number[] = []; // Ensure this line is included

  constructor() {
    this.initializeYears();
  }

  initializeYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 10; year <= currentYear + 10; year++) {
      this.years.push(year);
    }
  }

  onSearch() {
    this.search.emit({ month: this.selectedMonth, year: this.selectedYear });
  }
}
