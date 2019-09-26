import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { AdfolderComponent } from './adfolder/adfolder.component';
import { AdFileComponent } from './ad-file/ad-file.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploadService } from './file-upload.service';
import { SharingService } from './sharing.service';
import { DndDirective } from './dnd.directive';
import { WorkComponent } from './work/work.component';
import { Work1Component } from './work1/work1.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdfolderComponent,
    AdFileComponent,
    FileUploadComponent,
    FileSelectDirective,
    DndDirective,
    WorkComponent,
    Work1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [LoginService, SharingService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
