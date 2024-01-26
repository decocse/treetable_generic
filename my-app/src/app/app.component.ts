import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedMonth: string | null = null;
  selectedYear: number | null = null;

  onSearch(event: { month: string, year: number }): void {
    this.selectedMonth = event.month;
    this.selectedYear = event.year;
  }
}
