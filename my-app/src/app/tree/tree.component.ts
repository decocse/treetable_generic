import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  template: ` <ul>
   <app-treenode *ngFor="let node of nodes" [node]="node"></app-treenode>
</ul>`,
  styleUrl: './tree.component.css'
})
export class TreeComponent {
  @Input() set nodes(value: any[] | undefined){
    console.log('Nodes data:', value);
    this._nodes = value;
  }

  get nodes(): any[] | undefined {
    return this._nodes;
  }
  private _nodes: any[] | undefined;
}
