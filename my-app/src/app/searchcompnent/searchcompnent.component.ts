import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchcompnent',
  template: `<div>
  <select [(ngModel)]="selectedMonth">
    <!-- Add month options here -->
  </select>
  <select [(ngModel)]="selectedYear">
    <!-- Add year options here -->
  </select>
  <button (click)="onSearch()">Search</button>
</div>`,
  styleUrl: './searchcompnent.component.css'
})
export class SearchcompnentComponent {
  @Output() search = new EventEmitter<{ month: string, year: number }>();

  selectedMonth: string = 'January'; // default value
  selectedYear: number = new Date().getFullYear(); // default value

  onSearch() {
    this.search.emit({ month: this.selectedMonth, year: this.selectedYear });
  }
}
