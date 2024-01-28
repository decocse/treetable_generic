import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './searchcompnent/searchcompnent.component';
import { DataloadingComponent } from './dataloading/dataloading.component';
import { TreenodeComponent } from './treenode/treenode.component';
import { TreeComponent } from './tree/tree.component';
import { DownloadComponent } from './download/download.component';
//import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { FilesizeComponent } from './filesize/filesize.component';


@NgModule({
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    SearchComponent,
    DataloadingComponent,
    TreenodeComponent,
    TreeComponent,
    DownloadComponent,
    FilesizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule      
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
