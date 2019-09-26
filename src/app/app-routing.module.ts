import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdfolderComponent } from './adfolder/adfolder.component';
import { AdFileComponent } from './ad-file/ad-file.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  { path : '', component: LoginComponent},
  { path : 'login', component: LoginComponent},
  { path : 'adFolder/:username', component: AdfolderComponent},
  { path : 'adFile', component: AdFileComponent},
  { path : 'filUpload/:name/:id', component: FileUploadComponent},
  { path : 'work', component: WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,AdfolderComponent,AdFileComponent,FileUploadComponent];
