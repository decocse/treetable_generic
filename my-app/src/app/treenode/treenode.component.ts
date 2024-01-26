import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-treenode',
  template: `<li>
  {{ node.name }}
  <ng-container *ngIf="node.children && node.children.length">
    <ul>
      <app-treenode *ngFor="let child of node.children" [node]="child"></app-treenode>
    </ul>
  </ng-container>
  <app-download *ngIf="node.isFile" [file]="node"></app-download>
</li>`,
  styleUrl: './treenode.component.css'
})
export class TreenodeComponent {
  @Input() node: any;
}
