import { Component, Input } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-download',
  template:`<button (click)="downloadFile()">Download</button>`,
  styleUrl: './download.component.css'
})
export class DownloadComponent {
  @Input() file: any;

  constructor(private dataService: DataService) {}

  downloadFile() {
    this.dataService.downloadFile(this.file.id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.download = this.file.name;
      anchor.href = url;
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
