import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchcompnentComponent } from './searchcompnent/searchcompnent.component';
import { DataloadingComponent } from './dataloading/dataloading.component';
import { TreenodeComponent } from './treenode/treenode.component';
import { TreeComponent } from './tree/tree.component';
import { DownloadComponent } from './download/download.component';
//import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    SearchcompnentComponent,
    DataloadingComponent,
    TreenodeComponent,
    TreeComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
