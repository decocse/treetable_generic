import { Component,Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-treenode',
  template: `
    <li>
  <span class="toggle" (click)="toggle()" *ngIf="node.children && node.children.length">
    [{{ isExpanded ? '-' : '+' }}]
  </span>
    <span class="node-name">{{ node.name }}</span> 
  <span *ngIf="!node.isFile" class="folder-info"> (Folder - Size: {{ node.size | fileSize }} )</span>
  <span *ngIf="node.isFile" class="file-info"> (File - Size: {{ node.size | fileSize }})</span>
  <ul *ngIf="isExpanded && node.children && node.children.length">
    <app-treenode *ngFor="let child of node.children" [node]="child"></app-treenode>
  </ul>
</li>
  `,
  styles: [`
   ul {
    list-style-type: none;
    padding-left: 20px;
    margin: 0;
  }
  li {
    margin-bottom: 5px;
  }
  .toggle {
    cursor: pointer;
    font-weight: bold;
    margin-right: 5px;
  }
  .toggle:hover {
    color: #007bff; /* Bootstrap primary color for example */
  }
  .node-name {
    font-size: 16px;
  }
  .file-info {
    color: green;
  }
  .folder-info {
    color: blue;
  }
  `]
})
export class TreenodeComponent {
  @Input() node: any;
  isExpanded: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['node']) {
      console.log('Node value yessssss:', this.node);
    }
  }


  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
