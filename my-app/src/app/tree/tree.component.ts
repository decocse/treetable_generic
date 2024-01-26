import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  template: ` <ul>
  <app-treenode *ngFor="let node of nodes" [node]="node"></app-treenode>
</ul>`,
  styleUrl: './tree.component.css'
})
export class TreeComponent {
  @Input() nodes: any[] | undefined;
}
