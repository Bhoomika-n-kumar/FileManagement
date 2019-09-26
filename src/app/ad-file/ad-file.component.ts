import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Folder } from '../login';
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

@Output() yes1=new EventEmitter();

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
   // element.setAttribute('style','display:none;');
   this.yes1.emit(false)
  }
  
create(folder: Folder)
 {
  this.login.createFolder(folder).subscribe();
 }
}
    
