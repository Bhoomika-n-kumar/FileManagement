import { Component, OnInit } from '@angular/core';
import { create } from 'domain';
import { Folder } from '../login';
import { HttpClient } from 'selenium-webdriver/http';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-ad-file',
  templateUrl: './ad-file.component.html',
  styleUrls: ['./ad-file.component.css']
})
export class AdFileComponent implements OnInit {

  allFolder: Folder[];
  uname:any;



constructor( private login: LoginService) { }

ngOnInit() { 
  this.get();
 }
           
get()
  {
    this.login.getFolder().subscribe(
      (data: Folder[]) => {
        this.allFolder = data;
        console.table(this.allFolder);
      });
  }

  close()
  {
    var element = document.getElementById("card1");
    element.setAttribute('style','display:none;');
  }
  
create(folder: Folder)
 {
  this.login.createFolder(folder).subscribe();
 }
}
    
