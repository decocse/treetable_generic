import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-treenode',
  template: `
    <li>
      <span (click)="toggle()" *ngIf="node.children && node.children.length">
        [{{ isExpanded ? '-' : '+' }}]
      </span>
      {{ node.name }}
      <ul *ngIf="isExpanded && node.children && node.children.length">
        <app-treenode *ngFor="let child of node.children" [node]="child"></app-treenode>
      </ul>
    </li>
  `,
  styles: [`
    ul {
      list-style-type: none;
      padding-left: 20px;
    }
    span {
      cursor: pointer;
    }
  `]
})
export class TreenodeComponent {
  @Input() node: any;
  isExpanded: boolean = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
