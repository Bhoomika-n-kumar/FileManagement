import { Component, OnInit, Input } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FileUploadService } from '../file-upload.service';
import {saveAs} from 'file-saver';
import { SharingService } from '../sharing.service';
import { LoginService } from '../login.service';
import { Folder } from '../login';

const URL = 'http://localhost:5000/start/upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [FileUploadService]
})
export class FileUploadComponent implements OnInit {

  //@Input() received: any; 

  true1: boolean;
  attachmentList:any = [];
  folderName :any;
  text : boolean;
  array = [];
  abcd: any = [];
  allFiles: any = [];

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'file' });

  constructor(private file : FileUploadService, private logSer: LoginService) { }

  ngOnInit() {
    //this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
   
    this.function();
    this.getFol();
    this.getSpecificData();
    //this.uploading();
    this.folderName = this.logSer.getFoldr();
  }
  
  uploading()
  {
    this.text = true;
    /*var element = document.getElementById('div12');
    var ele = document.getElementById('div1');
    ele.setAttribute('style','height:500px;');
    element.setAttribute('style','display:none');*/
    this.uploader.onCompleteItem = (item: any, response: any, status: any) => {
      console.log('File uploaded:', item, status, response),
      this.attachmentList.push(JSON.parse(response));
      if(this.attachmentList == null)
      {  
        this.true1 = true;
      }
      else
      {
        this.yes();
      }                  
  }
}

getSpecificData()
{
  this.logSer.getSpecificData().subscribe(
    (data) => {
      this.allFiles = data.Files
      console.log(this.allFiles);
    }
  )
}


patchFiles(name : string)
{
  this.logSer.getArrayData().subscribe(
    (data : any) => 
    {this.abcd = data,
    console.log(this.abcd)
    let Files1 = this.abcd.Files;
    this.logSer.patchFiles(Files1, name).subscribe(
      (data : any) => {});
    }
  );

  /*this.logSer.patchFiles(name).subscribe(
    (data : any) => {
      //this.abcd = data,
      console.log(data)}
  )
  console.log(name);*/
}
 
  getFol()  
  { 
    this.folderName = this.logSer.getFoldr();
    console.log(this.folderName);
    //console.log(this.share.Folder);
    /*this.share.folder$.subscribe
    ( message => {
      if( message != null)
      {
        this.folder1 = message;
      }
    } ) */
  }
  
  yes()
  {
    document.getElementById('change').innerHTML = '';
  }

  function()
  {
    var array1 = [];
    var dropzone = document.getElementById('div1');
    this.array = array1;
    this.true1 = true;
    
    var upload = function(files) 
    {
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
        
      for (var x = 0; x < files.length; x++) 

      {
        formData.append('file', files[x]);  
        console.log(files[x]);
      }   
      
      /*xhr.onload = function() 
      { 
        var data = this.responseText; 
        console.log(data); 
      }*/ 
      
      

      xhr.open('post','http://localhost:5000/start1/upload');
      xhr.send(formData);
    }
    
    dropzone.ondrop = function (e)
    {
      e.preventDefault();    
      console.log(e.dataTransfer.files); 

      upload(e.dataTransfer.files);
      let files: FileList = e.dataTransfer.files;
      for (var i = 0; i < e.dataTransfer.files.length; i++) 
      {  
        //alert('Uploaded file: ' + e.dataTransfer.files[i].name);   
        array1.push(e.dataTransfer.files[i].name);  
        //console.log(array1.length);
        //arr1.push({file:e.dataTransfer.files[i]});
      } 
      /*if(array1.length != 0){
        var element = document.getElementById('div12');
        element.setAttribute('style','display:none');
        var ele = document.getElementById('div1');
        ele.setAttribute('style','height:500px;');
      }*/
    } 

    dropzone.ondragover = function()   
    { 
      return false; 
    }       

    dropzone.ondragleave = function()                                                         
    { 
      return false; 
    }    
    
  }

/*allowDrop(ev) {
  ev.preventDefault();
}

drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  this.text = true;
}

drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}*/


}


