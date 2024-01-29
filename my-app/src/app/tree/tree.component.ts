import { Component, Input } from '@angular/core';
export interface TreeNode {
  id: number;
  name: string;
  isFile: boolean;
  size?: number;
  children?: TreeNode[];
}
@Component({
  selector: 'app-tree',
  template: ` <ul>
   <app-treenode *ngFor="let node of nodes" [node]="node"></app-treenode>
</ul>`,
  styleUrl: './tree.component.css'
})
export class TreeComponent {

  public _nodes: TreeNode[] = [];
  @Input()
  set nodes(value: TreeNode[]) { // Expect an array, not undefined
    console.log('Nodes data:', value);
    this._nodes = value;
  }

  get nodes(): TreeNode[] { // Always return an array
    return this._nodes;
  }
}
