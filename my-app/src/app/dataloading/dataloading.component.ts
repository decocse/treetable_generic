import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../../data.service';

interface TreeNode {
  id: number;
  name: string;
  path: string;
  isFile: boolean;
  parentId: number | null;
  children: TreeNode[];
}


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
    // this.files = [
    //   {
    //     id: 1,
    //     name: "Folder 1",
    //     isFile: false,
    //     children: [
    //       {
    //         id: 2,
    //         name: "File 1.txt",
    //         isFile: true,
    //         children: null
    //       },
    //       {
    //         id: 3,
    //         name: "File 2.txt",
    //         isFile: true,
    //         children: null
    //       }
    //     ]
    //   },
    //   {
    //     id: 4,
    //     name: "File 3.txt",
    //     isFile: true,
    //     children: null
    //   }
    // ];
  
    if (changes['month'] || changes['year']) {
      this.dataService.loadData(this.month, this.year).subscribe(
        data => {
          console.log('from data',data)
          this.files = data;
        },
        error => this.files = null
      );
    }
  }

  private transformDataToTreeStructure(data: any[]): any[] {
    const itemMap = new Map<number, any>();
  
    // First, map all items by their ID and initialize children arrays
    data.forEach(item => {
      itemMap.set(item.id, { ...item, children: [] });
    });
  
    // Now, build the hierarchy by setting the parent-child relationships
    data.forEach(item => {
      if (item.parentId) {
        const parentItem = itemMap.get(item.parentId);
        if (parentItem) {
          parentItem.children.push(itemMap.get(item.id));
        }
      }
    });
  
    // Finally, extract the root items (items without a parentId)
    console.log('hoi hoi less go',Array.from(itemMap.values()))
    return Array.from(itemMap.values()).filter(item => !item.parentId);
  }
}