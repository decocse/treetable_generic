import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-dataloading',
  template: `<ng-container *ngIf="files && files.length; else noDataTemplate">
  <app-tree [nodes]="files"></app-tree>
</ng-container>
<ng-template #noDataTemplate>
  No data found for selected month and year.
</ng-template>`,
  styleUrl: './dataloading.component.css'
})
export class DataloadingComponent {
  @Input() month: string='1';
  @Input() year: number=2024;
  files: any[] | null = null;

  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['month'] || changes['year']) {
      this.dataService.loadData(this.month, this.year).subscribe(
        data => {
          this.files = this.transformDataToTreeStructure(data);
        },
        error => this.files = null
      );
    }
  }

  private transformDataToTreeStructure(data: any[]): any[] {
    // Transformation logic here (as provided in the previous message)
    const buildTree = (parentId: string | null): any[] => {
      return data
        .filter(item => item.parentId === parentId)
        .map(item => {
          // If the item is a folder, recursively get its children
          const children = item.type === 'folder' ? buildTree(item.id) : [];
          return {
            ...item,
            children: children
          };
        });
    };
  
    // Start building the tree with null as the initial parent ID (for root items)
    return buildTree(null);
  }
}
