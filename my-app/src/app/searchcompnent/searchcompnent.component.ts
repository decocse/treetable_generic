import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div class="search-container">
    <select class="select-style" [(ngModel)]="selectedMonth">
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
      <select class="select-style" [(ngModel)]="selectedYear">
        <option *ngFor="let year of years" [value]="year">{{ year }}</option>
      </select>
      <button class="search-button" (click)="onSearch()">Search</button>
    </div>
  `,
  styles: [`
  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #f3f3f3; /* Light gray background */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* subtle shadow */
  }
  .select-style {
    padding: 5px 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
  }
  .select-style:focus {
    outline: none;
    border-color: #007bff; /* Bootstrap primary color */
  }
  .search-button {
    padding: 5px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff; /* Bootstrap primary color */
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .search-button:hover {
    background-color: #0056b3; /* Darker shade for hover */
  }
`]
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
