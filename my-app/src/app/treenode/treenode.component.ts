// treenode.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

export interface TreeNode {
  id: number;
  name: string;
  size?: number;
  isFile: boolean;
  children?: TreeNode[];
}

@Component({
  selector: 'app-treenode',
  templateUrl: './treenode.component.html',
  styleUrls: ['./treenode.component.css']
})
export class TreenodeComponent  {
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  displayedColumns: string[] = ['checkbox','name', 'size', 'type'];

  @Input() set node(value: TreeNode | null) {
    this.dataSource.data = value ? [value] : [];
    console.log('letss see');
    this.treeControl.dataNodes = this.dataSource.data;
  }
  logNodeName(node: TreeNode) {
    console.log('Node name for testing treecomonnet:', node.name);
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;
}
