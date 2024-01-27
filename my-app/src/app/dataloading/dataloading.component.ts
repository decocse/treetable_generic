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
          this.files = this.transformDataToTreeStructure(data);
        },
        error => this.files = null
      );
    }
  }

  private transformDataToTreeStructure(data: any[]): any[] {
    // Create a map for quick access and modification
    const itemMap = new Map<number, any>();
  
    // Initialize the map with a modified structure
    data.forEach(item => {
      itemMap.set(item.id, {
        id: item.id,
        name: item.name,
        isFile: item.isFile,
        children: item.isFile ? null : [] // Set children to null for files initially
      });
    });
  
    const rootItems: any[] = [];
  
    data.forEach(item => {
      const currentItem = itemMap.get(item.id);
      if (item.parentId && currentItem) {
        const parentItem = itemMap.get(item.parentId);
        if (parentItem && parentItem.children) {
          parentItem.children.push(currentItem); // Add current item to parent's children
        }
      } else if (!item.parentId) {
        rootItems.push(currentItem); // Add root items (items without parentId)
      }
    });
    console.log('transform',rootItems)
    return rootItems;
  }
  
}