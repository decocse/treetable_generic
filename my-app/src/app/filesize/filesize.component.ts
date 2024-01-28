import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})

export class FilesizeComponent {
  transform(size: number): string {
    console.log('size hai bhai',size)
    if (size < 1024) {
      return size + ' bytes';
    } else if (size < 1048576) {
      return (size / 1024).toFixed(1) + ' KB';
    } else if (size < 1073741824) {
      return (size / 1048576).toFixed(1) + ' MB';
    } else {
      return (size / 1073741824).toFixed(1) + ' GB';
    }
  }
}
